import style from './Card.module.css';
import Image from 'next/image';

type Props = {
    name: string;
    tier: number;
    image: string;
    setCount: (value: number) => void;
    setTier: (value: number) => void;
    
}

const imageStyle:any = {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '6px 6px 0px 0px',
    width: '100%',
    height: "auto"
}

export function Card({name,tier,image,setCount,setTier}: Props) {

  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value))
    setTier(tier)
  }

  return (
    <div className={style.cardWrapper}>
        <Image src={`/assets${image}`} alt={name} width={256} height={128} style={imageStyle}/>
        <div className={style.sideInfo}>
            <h2>{name}</h2>
            <input type='text' onChange={(e) => onChange(e)}/>
        </div>
    </div>
  )
}
