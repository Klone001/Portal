"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib"
import { Button } from "@nextui-org/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import { dayMap, months, weekDays } from "@/data"

type DaySpecifier = number | string

interface DateSelectorProps {
    initialDate?: Date
    availableDates?: any[]
    onDateSelect?: (date: Date | { start: Date; end: Date }) => void
    disablePastDates?: boolean
    disabledDays?: DaySpecifier[]
    selectionMode?: "single" | "range"
}


export default function DateSelector({
    initialDate = new Date(),
    availableDates = [],
    onDateSelect,
    disablePastDates = false,
    disabledDays = [],
    selectionMode = "single",
}: DateSelectorProps) {
    const [currentDate, setCurrentDate] = useState(initialDate)
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate)
    const [rangeStart, setRangeStart] = useState<Date | null>(null)
    const [rangeEnd, setRangeEnd] = useState<Date | null>(null)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    useEffect(() => {
        setCurrentDate(initialDate)
        if (selectionMode === "single") {
            setSelectedDate(initialDate)
            setRangeStart(null)
            setRangeEnd(null)
        } else {
            setSelectedDate(new Date(0)) 
        }
    }, [initialDate, selectionMode])

    const isDisabled = (date: Date) => {
        const isPastDate = disablePastDates && date < today
        const dayNumber = date.getDay()
        const isDisabledDay = disabledDays.some((day) => {
            if (typeof day === "number") return day === dayNumber
            return dayMap[day.toLowerCase()] === dayNumber
        })

        const availableDate = availableDates?.find(
            (available) => new Date(available.date).toDateString() === date.toDateString()
        )
        const isOpenSlot = availableDate ? availableDate.hasOpenSlot : true

        return isPastDate || isDisabledDay || !isOpenSlot
    }

    const handleDateClick = (date: Date) => {
        if (isDisabled(date)) return

        if (selectionMode === "single") {
            setSelectedDate(date)
            onDateSelect?.(date)
        } else {
            if (!rangeStart || (rangeStart && rangeEnd)) {
                setRangeStart(date)
                setRangeEnd(null)
            } else {
                if (date < rangeStart) {
                    setRangeEnd(rangeStart)
                    setRangeStart(date)
                    onDateSelect?.({ start: date, end: rangeStart })
                } else {
                    setRangeEnd(date)
                    onDateSelect?.({ start: rangeStart, end: date })
                }
            }
        }
    }

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate)
        newDate.setMonth(newDate.getMonth() - 1)
        setCurrentDate(newDate)
    }

    const handleNextMonth = () => {
        const newDate = new Date(currentDate)
        newDate.setMonth(newDate.getMonth() + 1)
        setCurrentDate(newDate)
    }

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const days: (Date | null)[] = []

        // Add blanks for first week padding
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null)
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    const isInRange = (date: Date) => {
        if (!rangeStart) return false
        if (!rangeEnd) return date.toDateString() === rangeStart.toDateString()

        const time = date.getTime()
        return time >= rangeStart.getTime() && time <= rangeEnd.getTime()
    }

    const days = getDaysInMonth(currentDate)

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-x-3 mb-6">
                <Button
                    variant="bordered"
                    isIconOnly
                    radius="full"
                    onClick={handlePrevMonth}
                    className="border border-[#F6F6F6]"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                </Button>

                <div className="text-base pt-1.5">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>

                <Button
                    variant="bordered"
                    isIconOnly
                    radius="full"
                    onClick={handleNextMonth}
                    className="border border-[#F6F6F6]"
                >
                    <ArrowRightIcon className="h-4 w-4" />
                </Button>
            </div>

            <div className="grid grid-cols-7 w-full gap-5">
                {weekDays.map((day) => (
                    <div key={day} className="text-center text-xs py-2 border-b pb-4">
                        {day}
                    </div>
                ))}

                {days.map((date, index) => {
                    if (!date) return <div key={`empty-${index}`} className="p-2" />

                    const isToday = date.toDateString() === today.toDateString()
                    const disabled = isDisabled(date)
                    const inRange = selectionMode === "range" && isInRange(date)
                    const isStart = rangeStart && date.toDateString() === rangeStart.toDateString()
                    const isEnd = rangeEnd && date.toDateString() === rangeEnd.toDateString()

                    const isSelected = selectionMode === "single" && date.toDateString() === selectedDate.toDateString()

                    return (
                        <button
                            key={date.toISOString()}
                            onClick={() => handleDateClick(date)}
                            disabled={disabled}
                            className={cn(
                                "size-8 flex items-center m-auto justify-center text-xs font-medium",
                                "hover:bg-accent hover:text-accent-foreground",
                                {
                                    "bg-primary text-white rounded-lg": selectionMode === "single" && isSelected,
                                    "bg-primary text-white rounded-l-lg": isStart && selectionMode === "range",
                                    "bg-primary text-white rounded-r-lg": isEnd && selectionMode === "range",
                                    "bg-[#4A9A9366] text-foreground": inRange && !isStart && !isEnd,
                                    "border-[1.8px] border-[#90A3A1]": isToday && !inRange && !isStart && !isEnd,
                                    "text-muted-foreground": disabled,
                                    "cursor-not-allowed opacity-50": disabled,
                                }
                            )}>
                            {date.getDate()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
