import { configureStore } from "@reduxjs/toolkit";
import trainer from "./states/trainer.state"  //importamos el representante

export default configureStore({
    reducer: {
        trainer
    }
})