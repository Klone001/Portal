import { Container } from '@/components/containers'
import Image from 'next/image'
import React from 'react'
import LoginForm from './LoginForm'

const LoginView = () => {
  return (
    <div className="realtive w-full min-h-screen bg-auth-bg bg-cover bg-center">

      <div className="absolute inset-0 bg-[#68D9CF1A] min-h-screen h-full"></div>

      <div className="relative z-10">

        <Container>

          <div className="relative z-10 flex justify-center items-center min-h-screen py-12">

            <div className="relative bg-white w-full max-w-2xl 2xl:max-w-3xl p-5 rounded-xl">

              {/* LOGIN ARROW SHAPE */}
              <div className="flex items-center absolute -left-0 md:-left-10">
                <Image src='/images/rec.svg' height={48} width={52} alt='Rec' className=' h-12 md:h-14 -mr-5' />
                <div className="relative h-12  md:h-14 px-8 py-3 bg-primary rounded-tr-lg rounded-br-lg shadow justify-center items-center inline-flex">
                  <div className="text-white text-base font-bold">Login</div>
                </div>
              </div>


              <div className="pt-28 md:pt-32 pb-20 md:pb-32 max-w-xl m-auto">

                <div className="space-y-1 mb-5">
                  <h2 className="text-black font-bold text-2xl md:text-3xl">Welcome Admin</h2>
                  <p className="text-xs lg:text-sm text-gray-700"> Enter your verified username and password</p>
                </div>

                <LoginForm />

              </div>

              <h1 className="uppercase text-xs md:text-sm text-gray-500 text-center">This is for klone staff only</h1>

            </div>

          </div>

        </Container>

      </div>

    </div>
  )
}

export default LoginView