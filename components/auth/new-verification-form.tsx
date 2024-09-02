"use client"

import { newVerification } from "@/actions/new-verification"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import BeatLoader from "react-spinners/BeatLoader"
import { CardWrapper } from "./card-wrapper"
import { FormError } from "./form-error"
import { FormSuccess } from "./form-success"
import { getVerificationTokenByToken } from "@/data/verification-token"
import { getUserByEmail, getUserById } from "@/data/user"
import { db } from "@/lib/db"
import { data } from "@/app/_data"

export const NewVerificationForm = async () => {
	
	const [error, setError] = useState<string | undefined>()
	const [success, setSuccess] = useState<string | undefined>()

	const searchParams = useSearchParams()

	const token = searchParams?.get("token")

	const onSubmit = useCallback(() => {
		if(success || error) return
		
		if (!token) {
			setError("Missin token!")
			return
		}

		newVerification(token)
			.then((data) => {
				setSuccess(data.success)
				setError(data.error)
			})
			.catch(() => {
				setError("Something went wrong!")
			})
		console.log(token)
	}, [token, success, error])

	useEffect(() => {
		onSubmit()
	}, [onSubmit])

	return (
		<CardWrapper
			headerLabel="Confirming your verification"
			backButtonHref="/auth/login"
			backButtonLabel="Back to login"
		>
			<div className="flex items-center w-full justify-center">
				{!success && !error && <BeatLoader />}
				<FormSuccess message={success} />
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	)
}
