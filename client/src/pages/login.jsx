import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi";
import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react"

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
import { useEffect, useState } from "react"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerLoading,
      isSuccess: registerIsSuccess
    }
  ] = useRegisterUserMutation()
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginLoading,
      isSuccess: loginIsSuccess
    }
  ] = useLoginUserMutation()

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === 'signup') {
      setSignupInput({ ...signupInput, [name]: value })
    } else {
      setLoginInput({ ...loginInput, [name]: value })
    }
  }

  const handleRegistration = async (type) => {
    const inputData = type === 'signup' ? signupInput : loginInput;
    const action = type === 'signup' ? registerUser : loginUser;
    await action(inputData)
  }

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup Successfully.")
    }
    if (registerError) {
      toast.error(registerError?.data?.message || 'Error occured')
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Signup Successfully.")
      navigate('/')
    }
    if (loginError) {
      toast.error(loginError?.data?.message || 'Error occured')
    }
  }, [
    loginData,
    loginLoading,
    loginError,
    registerData,
    registerLoading,
    registerError
  ])
  return (
    <div className="flex w-full items-center justify-center mt-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList className='flex justify-between items-center w-full'>
            <TabsTrigger value="signup" className='cursor-pointer'>Signup</TabsTrigger>
            <TabsTrigger value="login" className='cursor-pointer'>Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  create an account and click on register when you're done
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input
                    type='text'
                    name='name'
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder='Eg. Keshav'
                    required='true'
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Email</Label>
                  <Input
                    type='email'
                    name='email'
                    value={signupInput.email}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder='Eg. kesav@gmail.com'
                    required='true'
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Password</Label>
                  <Input
                    type='password'
                    name='password'
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder='*********'
                    required='true'
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled={registerLoading} onClick={() => handleRegistration('signup')} className='cursor-pointer'>
                  {
                    registerLoading ?
                      (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please wait
                        </>
                      ) : "register"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* login  */}

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  login here
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Email</Label>
                  <Input
                    type='email'
                    name='email'
                    value={loginInput.email}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder='Eg. kesav@gmail.com'
                    required='true'
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Password</Label>
                  <Input
                    type='password'
                    name='password'
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder='*********'
                    required='true'
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled={loginLoading} onClick={() => handleRegistration('login')}>
                  {
                    loginLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please wait
                      </>
                    ) : "Login"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Login