import './style.css'
import { motion } from "framer-motion";

export default function Info() {
    return (
        <div className="info-container">
            <div className="info-content">
            <motion.div animate={{ x:0, opacity: 1 }} initial={{ x: '-100vw', opacity: 0 }} transition={{ delay: 0.5,duration: 1 }}>
                <h1>Welcome to Mackina Pack</h1>
                <p>
                Makina Pack est une société spécialisée dans le domaine de Fabrication et vente Machines d'emballage
                <strong> SIÈGE : Avenue de la république Bennane 5025 -Monastir </strong>
                </p>
            </motion.div >
                <motion.div animate={{ x:0, opacity: 1 }} initial={{ x: '+100vw', opacity: 0 }} transition={{ delay: 0.5,duration: 1 }}>
                <img src="makinapack.png" className='img'/>
                </motion.div>
            </div>
        </div>
    );
    
};
