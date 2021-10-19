import React from 'react';
import { useForm } from 'react-hook-form';

const Booking = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div className="fild">
            <div className="header">
                <h2 > Please Booking this service </h2>
            </div>

            <div >
                <form onSubmit={handleSubmit(onSubmit)} className=" input-fied   " >

                    <input className="input" placeholder="your name "  {...register("Name")} />


                    <input className="input" placeholder="your valide emaile" {...register("Email", { required: true })} />

                    {errors.exampleRequired && <span className="">Eamil required </span>}
                    <input type="number" placeholder="your age" {...register("age", { min: 18, max: 99 })} />

                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>

                    <input className="inputBtn" type="submit" />

                </form>

            </div>
        </div>
    );
};

export default Booking;