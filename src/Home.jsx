import { motion } from "framer-motion";

export default function Home() {
    return <>
        <motion.div
                className="container justify-content-center text-center"
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 2}}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                drag
                dragElastic={0.5}
        >
            <h1 style={{padding: '50px'}}>Witamy w serwisie rejestrowań spotkań <br/>
                <i>ZnanyKorepetytor</i></h1>
        </motion.div>
    </>
}
