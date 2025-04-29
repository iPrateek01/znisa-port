'use client'

import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ShimmerButton } from '../magicui/shimmer-button'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),
})

function ContactHere() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
    }

    return (
        <div className='p-7 font-handlee flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-0'>
            <div className='flex flex-1/3 flex-col gap-5 my-auto items-start sm:ml-10'>
                <span className='bg-pink-300 text-xl font-bold drop-shadow-md'>Contact here</span>
                <span className='transform rotate-240 translate-x-20'>
                    <Image src={images.arrow} alt='arrow' className='translate-y-[1rem]'></Image>
                </span>
                <p className='font-inter'>Have a project idea? <br />
                    just say me <span className='font-bold'>Hi.</span></p>
            </div>
            <div className='flex flex-2/3 sm:px-5 flex-col gap-5 justify-center sm:items-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 sm:w-8/12">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-row'>
                                        <FormLabel className='bg-pink-300 border-l-2 border-black transform rotate-[-4deg] font-bold tracking-wider translate-x-1 translate-y-1 text-lg sm:text-xl'>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Prateek Shende" {...field} />
                                        </FormControl>
                                    </div>
                                    {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-row'>
                                        <FormLabel className='bg-yellow-300 border-l-2 border-black transform rotate-[-4deg] font-bold text-nowrap tracking-wider translate-x-1 translate-y-1 text-lg sm:text-xl'>Your Email </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Prateek_655@live.com" {...field} />
                                        </FormControl>
                                    </div>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='flex flex-row'>
                                    <FormLabel className='bg-blue-300 border-l-2 border-black transform rotate-[-4deg] font-bold text-nowrap tracking-wider translate-x-1 translate-y-1 text-lg sm:text-xl'>About Project</FormLabel>
                                    <FormControl>
                                        <Input placeholder=" I want to discuss you about ....... " {...field} />
                                    </FormControl>
                                    </div>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <ShimmerButton type="submit" className='transform rotate-3 justify-self-end'>Submit</ShimmerButton>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ContactHere