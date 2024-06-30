import React, {useState} from 'react';
import Rating from "@/ui/Rating";

function RatingInput({defaultAmount, onChange}: { defaultAmount: number, onChange: (rating: number) => void }) {
    const [amount, setAmount] = useState(defaultAmount);
    return <Rating amount={amount}
                   reset={() => setAmount(defaultAmount)}
                   callback={setAmount}
                   submit={() => onChange(amount)}></Rating>
}

export default RatingInput;