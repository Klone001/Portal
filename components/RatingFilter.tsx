import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { useQueryParams } from '@/utils';

const RatingFilters = () => {
    const { updateQueryParams, searchParams } = useQueryParams();
    const activeRating = Number(searchParams.get('rating')) || 0;

    const handleRatingClick = (rating: number) => {
        updateQueryParams({ filterBy: 'rating', rating });
    };

    return (
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((ratingValue) => (
                <Button
                    key={ratingValue}
                    onPress={() => handleRatingClick(ratingValue)}
                    size="sm"
                    radius="full"
                    className="bg-gray-100 h-9 px-3"
                >
                    <div className="inline-flex items-center gap-x-0.5 text-secondary-400">
                        {[1, 2, 3, 4, 5].map((starIndex) =>
                            starIndex <= ratingValue ? (
                                <StarIcon key={starIndex} className="w-4 h-4 text-secondary-400" />
                            ) : (
                                <StarOutline key={starIndex} className="w-4 h-4 text-secondary-400" />
                            )
                        )}
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default RatingFilters;
