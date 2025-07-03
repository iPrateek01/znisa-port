'use client'

import React from 'react'
import images from '@/constants/images'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from "sonner"
// import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ShimmerButton } from '../magicui/shimmer-button'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }).regex(/^[a-zA-Z\s]*$/, {
        message: "Full name can only contain letters and spaces.",
    }),
    email: z.string().email({
        message: "Email must be a valid email address.",
    }),
    message: z.string().min(20, {
        message: "Message must be at least 20 characters.",
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

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const response = await axios.post('/api/send', data); // use correct route

            if (response.status === 200) {
                toast.success("Your Outreach has been sent!🎉", {
                    description: "Your message has been received! We'll get back to you soon.",
                })
                form.reset();
            } else {
                console.warn('⚠️ Something went wrong:', response);
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('❌ Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    return (
        <div id='contact' className='p-7 font-handlee flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-0'>
            <div className='flex flex-1/3 flex-col gap-5 my-auto items-start sm:ml-10'>
                <span className='bg-pink-300 text-xl font-bold drop-shadow-md'>Contact here</span>
                <span className='transform sm:rotate-240 rotate-290 sm:translate-x-20 transition-all duration-300'>
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
                                            <Input placeholder="Prateek123@live.com" {...field} />
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
                                        <FormLabel className=' bg-blue-300 border-l-2 border-black transform rotate-[-4deg] font-bold text-nowrap tracking-wider translate-x-1 translate-y-1 text-lg sm:text-xl'>About Project</FormLabel>
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
                        <ShimmerButton type="submit" className='hover:animate-goofy transform rotate-3 justify-self-end'>Submit</ShimmerButton>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ContactHere