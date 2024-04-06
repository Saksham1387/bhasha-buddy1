// "use client"
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//   } from "@/components/ui/form"
// import { Input } from "./ui/input"
// import { useForm } from "react-hook-form"
// import { Button } from "./ui/button"
// export const Signin =()=>{
//     return (
//         <div className="flex flex-col items-center justify-center h-full">
//             <div className="p-5 rounded-xl shadow-xl">
//                 <h1 className="text-xl text-center text-neutral-600 font-bold">Login</h1>
//                 <Form>
//       <form className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//             </div>
//         </div>
//     )
// }
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define your form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
});

export function ProfileForm() {
  // Initialize useForm with Zod schema resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // Define the onSubmit function
  //@ts-ignore
  const onSubmit = (data) => {
    console.log(data); // Handle form submission, e.g., send data to an API
  };

  return (
    // Use the form's handleSubmit method, passing your onSubmit handler
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
