import React from 'react';
import Button from "@/ui/Button/Button";
import {useForm} from "react-hook-form";
import SimpleInput from "@/ui/Input/SimpleInput";

const Form = ({onClose, onSubmit}: { onClose: () => void, onSubmit: (d: object) => void }) => {
    const {register, handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data))}
              className={'flex flex-col p-4 gap-2 h-[300px] bg-white rounded-lg shadow'}>
            <SimpleInput {...register("username")} placeholder={'Имя пользователя'}></SimpleInput>
            <SimpleInput {...register("password")} placeholder={'Пароль'}></SimpleInput>
            <div className={'self-end mt-auto flex gap-2'}>
                <Button variant={'outlined'} type={'submit'}>Подтвердить</Button>
                <Button variant={'outlined'} onClick={onClose}>Закрыть</Button>
            </div>
        </form>
    );
};

export default Form;