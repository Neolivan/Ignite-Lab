import { Checkbox } from "../components/Checkbox";
import { Envelope } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";
import { Text } from "../components/Text";
import { Lock } from 'phosphor-react'
import { FormEvent, useState } from "react";
import axios from "axios";

export function SignIn(){
    const [isUserSignIn , setIsUserSignIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        await axios.post('/sessions',{
            email:'neolivan.eng@outlook.com',
            password: '12345678',
        })

        setIsUserSignIn(true)
    }

    return(
        <div className="w-screen h-screen bg-grey-900 flex items-center justify-center text-grey-100 flex-col">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>

        <Text size="lg" className="text-grey-400 mt-1">
          Faça Login e começe a usar
        </Text>
      </header>
      <form onSubmit={handleSignIn} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">

        {isUserSignIn && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereço de email
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type={'email'} id="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock/>
            </TextInput.Icon>
            <TextInput.Input type={'password'} id="password" placeholder="******"/>
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>

        <footer className="flex flex-col items-center gap-4 mt-8">
          <Text asChild size="sm">
            <a href="" className="text-grey-400 underline hover:text-grey-200 ">Esqueceu sua senha?</a>
          </Text>
          <Text asChild size="sm">
            <a href="" className="text-grey-400 underline hover:text-grey-200 ">Na possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </form>
    </div>
    )
}