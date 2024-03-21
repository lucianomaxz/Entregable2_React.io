import { collection,addDoc } from "firebase/firestore";
import { db } from '../config/firebaseConfig';

const products = [
    {

        "name": "REMERA AFA WC ANIVERSARIO 4",
        "precio": 51999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3422877544ac49af80257b6c612134f0_9366/Remera_AFA_WC_Aniversario_4_Blanco_IV1930_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa8c718bce0748038254dda38ba5d382_9366/Remera_AFA_WC_Aniversario_4_Blanco_IV1930_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA ADIZERO",
        "precio": 69999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9dcbd68a5237497e8212af0200e598d5_9366/Musculosa_Adizero_Negro_HN8009_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0987e0d1c404825bb54af0200e5a1d3_9366/Musculosa_Adizero_Negro_HN8009_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {

        "name": "REMERA AFA WC ANIVERSARIO 2",
        "precio": 51999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/818e91d372d748d9b86ee461053037f4_9366/Remera_AFA_WC_Aniversario_2_Blanco_IV1928_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c3c2a836ae04fda835b2fc99f9c4c43_9366/Remera_AFA_WC_Aniversario_2_Blanco_IV1928_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA DE ENTRENAMIENTO TECHFIT",
        "precio": 37999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/da482c0e8aaa446391c9ae55009b1c0e_9366/Musculosa_de_Entrenamiento_Techfit_Negro_HK2338_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/414cc3203e8e47e9ab47ae55009b2463_9366/Musculosa_de_Entrenamiento_Techfit_Negro_HK2338_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {

        "name": "REMERA AFA WC ANIVERSARIO 5",
        "precio": 54999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/743f1e5298e4496196835282dc19466d_9366/Remera_AFA_WC_Aniversario_5_Negro_IV1931_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b86405cae2431e832c7516fbef9c06_9366/Remera_AFA_WC_Aniversario_5_Negro_IV1931_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA ADIZERO RUNNING",
        "precio": 67999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4181c7015e648f6912faf0900db6afc_9366/Musculosa_Adizero_Running_Blanco_HZ9033_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f7b1a26e96a24593acbfaf0900db7376_9366/Musculosa_Adizero_Running_Blanco_HZ9033_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {

        "name": "CHOMBA ARGENTINA TIRO 23",
        "precio": 33999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 4,
        "url": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e91e0099a96449f28ab3aeb500d7c3b3_9366/Chomba_Argentina_Tiro_23_Azul_HF3920_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddbb65051968493e94f4aeb500d7922d_9366/Chomba_Argentina_Tiro_23_Azul_HF3920_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA ADIZERO",
        "precio": 69999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/60ccb27a2209400b9018af1c01002b1d_9366/Musculosa_Adizero_Blanco_IA9340_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4506379023748108135af1c0100340e_9366/Musculosa_Adizero_Blanco_IA9340_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {

        "name": "REMERA ESSENTIALS LOGO LINEAL BORDADO TEJIDO JERSEY",
        "precio": 28999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 5,
        "url": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9adb229f3ab7473d8cbfafc6011aad56_9366/Remera_Essentials_Logo_Lineal_Bordado_Tejido_Jersey_Turquesa_IJ8659_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6517a30787f34fc89928afc6011a79e7_9366/Remera_Essentials_Logo_Lineal_Bordado_Tejido_Jersey_Turquesa_IJ8659_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA DE ENTRENAMIENTO YOGA BASE",
        "precio": 44999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d059131ab0e84bdfbcffaf350110f032_9366/Musculosa_de_Entrenamiento_Yoga_Base_Negro_IB7888_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c62b9b098cf841da8403af350110f8a7_9366/Musculosa_de_Entrenamiento_Yoga_Base_Negro_IB7888_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {

        "name": "RP CO TEE",
        "precio": 51999.99,
        "category": "REMERA",
        "talle": "S",
        "stock": 8,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d66e7dc526e64bd4848798576b961715_9366/RP_CO_TEE_Rojo_HY0428_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/93a7b7202f5249f1bdde3bb52ddf64ea_9366/RP_CO_TEE_Rojo_HY0428_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {

        "name": "MUSCULOSA DE ENTRENAMIENTO HIIT AEROREADY QUICKBURN",
        "precio": 60999.99,
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 4,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/921affc2c5584960b6c6af4800b104dd_9366/Musculosa_de_Entrenamiento_HIIT_AEROREADY_Quickburn_Negro_HY5395_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cc10e38b1be40db968daf4f012a1d79_9366/Musculosa_de_Entrenamiento_HIIT_AEROREADY_Quickburn_Negro_HY5395_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
];


export const seedProducts = () => {
    products.forEach( product => {
        addDoc( collection( db, "products"), product );
    })
}