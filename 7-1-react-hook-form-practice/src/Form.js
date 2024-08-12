import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const submit = (data) => {
        console.log('data---', data);

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder='이름'
                    {...register('name', {
                        required: '이름은 필수 항목'
                    })}
                />
                {errors.name?.message}
                <br />
                <input type="number" placeholder='나이'
                    {...register('age', {
                        validate: {
                            overZero: v => v > 0 ? true : '0이상 숫자만 가능'
                        }
                    })}
                />
                {errors.age?.message}
                <br />
                <button type='submit'>제출</button>
            </form>
        </div>
    )
}
