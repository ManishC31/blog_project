import React from 'react'
import { Label, TextInput, Button, Checkbox, Card, FileInput } from 'flowbite-react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <form className="space-y-6 mt-4">
          <div>
            <Label htmlFor="firstname" value="First Name" />
            <TextInput
              id="firstname"
              type="text"
              placeholder="Your First Name"
              required
              shadow
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastname" value="Last Name" />
            <TextInput
              id="lastname"
              type="text"
              placeholder="Your Last Name"
              required
              shadow
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              shadow
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              placeholder="Your Password"
              required
              shadow
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword" value="Confirm Password" />
            <TextInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              shadow
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="profileImage" value="Profile Image" />
            <FileInput
            color='primary'
              id="profileImage"
              accept="image/*"
              required
              className="mt-1"
            />
          </div>
          <div className="flex items-center">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="ml-2">
              I agree to the terms and conditions
            </Label>
          </div>
          <Button color="info" type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Register