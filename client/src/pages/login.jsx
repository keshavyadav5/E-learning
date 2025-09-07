import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AppWindowIcon, CodeIcon } from "lucide-react"
// kesavyadav072_db_user
// abV99RuMDwZ9Q03Q
// mongodb+srv://kesavyadav072_db_user:abV99RuMDwZ9Q03Q@cluster0.tqxc4h2.mongodb.net/

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

// Define Zod schemas
const signupSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number")
});

const loginSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address"),
  password: z.string()
    .min(1, "Password is required")
});

const Login = () => {
  const [activeTab, setActiveTab] = useState("signup");

  // Signup form
  const { 
    register: registerSignup, 
    handleSubmit: handleSignupSubmit, 
    formState: { errors: signupErrors, isSubmitting: isSignupSubmitting },
    reset: resetSignup
  } = useForm({
    resolver: zodResolver(signupSchema)
  });

  // Login form
  const { 
    register: registerLogin, 
    handleSubmit: handleLoginSubmit, 
    formState: { errors: loginErrors, isSubmitting: isLoginSubmitting },
    reset: resetLogin
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSignupSubmit = async (data) => {
    console.log("Signup data:", data);
    // Add your signup API call here
    try {
      // await signupApiCall(data);
      resetSignup();
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const onLoginSubmit = async (data) => {
    console.log("Login data:", data);
    // Add your login API call here
    try {
      // await loginApiCall(data);
      resetLogin();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="signup" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className='flex gap-3'>
            <TabsTrigger value="signup" className='cursor-pointer'>Signup</TabsTrigger>
            <TabsTrigger value="login" className='cursor-pointer'>Login</TabsTrigger>
          </TabsList>
          
          {/* Signup Form */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Create an account and click on register when you're done
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignupSubmit(onSignupSubmit)}>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type='text'
                      id="name"
                      {...registerSignup("name")}
                      placeholder='Eg. Keshav'
                    />
                    {signupErrors.name && (
                      <p className="text-sm text-red-500">{signupErrors.name.message}</p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      type='email'
                      id="signup-email"
                      {...registerSignup("email")}
                      placeholder='Eg. kesav@gmail.com'
                    />
                    {signupErrors.email && (
                      <p className="text-sm text-red-500">{signupErrors.email.message}</p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      type='password'
                      id="signup-password"
                      {...registerSignup("password")}
                      placeholder='*********'
                    />
                    {signupErrors.password && (
                      <p className="text-sm text-red-500">{signupErrors.password.message}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    disabled={isSignupSubmitting}
                    className='cursor-pointer mt-2'
                  >
                    {isSignupSubmitting ? "Registering..." : "Register"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Login Form */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login here
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      type='email'
                      id="login-email"
                      {...registerLogin("email")}
                      placeholder='Eg. kesav@gmail.com'
                    />
                    {loginErrors.email && (
                      <p className="text-sm text-red-500">{loginErrors.email.message}</p>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      type='password'
                      id="login-password"
                      {...registerLogin("password")}
                      placeholder='*********'
                    />
                    {loginErrors.password && (
                      <p className="text-sm text-red-500">{loginErrors.password.message}</p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    disabled={isLoginSubmitting}
                    className='cursor-pointer mt-2'
                  >
                    {isLoginSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Login