import { Usuario } from "src/app/models/user.model";
import * as fromUsuarios from '../actions';
import { Actions } from "@ngrx/effects";

//dfinir como estara el estado

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}


const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}


export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState{

  switch( action.type ){

    case fromUsuarios.CARGAR_USUARIOS :
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsuarios.CARGAR_USUARIOS_SUCCESS :
    return{
      ...state,
      loading: false,
      loaded: true,
       users: action.usuarios
    };

    case fromUsuarios.CARGAR_USUARIOS_FAIL :
    return{
      ...state,
      loaded: false,
      loading: false,
      error: {
        status: action.payload.status,
        message: action.payload.message,
        url: action.payload.url
      }
    };
    
    default: 
    return state;
  }


}