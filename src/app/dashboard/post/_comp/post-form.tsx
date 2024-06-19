'use client'

import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

import {
  createPost,
  getPostById,
  updatePost,
} from '@/features/post/post-actions'

const FormSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Description must be at least 2 characters.',
  }),
  keywords: z.string().min(2, {
    message: 'Keyword must be at least 2 characters.',
  }),
  thumbnail: z.string().min(2, {
    message: 'Thumbnail must be at least 2 characters.',
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.',
  }),
})

export default function PostForm() {
  const p = useSearchParams()
  const postId = p.get('id')

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      keywords: '',
      thumbnail: '',
      content: '',
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!postId) return

      setIsLoading(true)

      const defaults = await getPostById(parseInt(postId))
      if (defaults) {
        form.reset({
          id: defaults.id,
          title: defaults.title,
          description: defaults.description || '',
          keywords: defaults.keywords || '',
          thumbnail: defaults.thumbnail || '',
          content: defaults.content || '',
        })
      } else {
        console.log('add new post')
      }

      setIsLoading(false)
    }
    fetchData()
  }, [postId, form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let result: any = null

    if (!data.id) {
      result = await createPost(data)
      form.reset()
    } else {
      result = await updatePost(data)
      form.reset(data)
    }

    toast({
      description: result !== null ? 'Saved successfully.' : 'Failed.',
      variant: 'default',
    })
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6">
            {postId && <input hidden type="text" name="id" id="id" />}

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your post title.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>thumbnail</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="thumbnail url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your post description.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keyword</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      disabled={form.formState.isSubmitting}
                      placeholder="Keyword"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your post keyword.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={12}
                      disabled={form.formState.isSubmitting}
                      placeholder="Content"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your post content.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row items-center gap-6">
              <Button disabled={form.formState.isSubmitting} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
