import React from 'react';
import s from './Main.module.scss';
import mobile from '../../assets/mobile.png'
import { benefits } from './benefits';
import Benefit from '../../components/Benefit/Benefit';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import UAParser from 'ua-parser-js';
import { useState } from 'react';

const Main = () => {
    const [device, setDevice] = useState('');
    const history = useHistory();
    const handleSubmit = () => {
        
    }

    useEffect(() => {
        let deviceL = UAParser(navigator.userAgent).device.type;
        setDevice(deviceL as string)
    })
    return (
        <div className={s.root}>
            <div className={s.top}>
                <div className={s.left_block}>
                    <h2 className={s.slogan}>
                        <b>Brainstorming</b> for <br /> desired perfect Usability
                    </h2>
                    
                    <div className={s.description}>
                        Our design projects are fresh and simple and will benefit <br />
                        your business greatly. Learn more about our work!
                        {
                            device === "mobile"
                                ? <img src={mobile} className={s.mobile} />
                                : null
                        }
                    </div>
                    <button onClick={() => history.push('statistic')} className={s.view_stats}>
                        Views Stats
                    </button>
                </div>

                {
                    device !== "mobile"
                        ? <img src={mobile} className={s.mobile} />
                        : null
                }
            </div>

            <div className={s.middle}>
                <h2 className={s.question}>
                    Why small <b>business owners <br />
                    love</b> AppCo?
                </h2>
                <div className={s.answer}>
                    Our design projects are fresh and simple and will benefit your business <br />
                     greatly. Learn more about our work!
                </div>
                <div className={s.benefits}>
                    {
                        benefits.map(item => (
                            <Benefit
                            title={item.title}
                            body={item.body}
                            img={item.img}
                            key={`${item.id}benefit`}
                            />
                            ))
                    }
                </div>
            </div>

            <div className={s.footer}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    />
                    <input
                        type="submit"
                        value="Subscribe"
                    />
                </form>
            </div>
        </div>
    )
}

export default Main
