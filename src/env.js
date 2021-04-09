/* 
* Automatically generated by react-envs.
* If you wish to declare a new environment variable declare it in the .env file (prefixed by REACT_APP_)
* then run 'npx generate-env-getter js' at the root of your project.
* This file will be updated.
*/
import { getEnvVarValue } from "react-envs";

function getEnvNoMemo() {
    return {
        "MESSAGE": getEnvVarValue("MESSAGE")
    };
}

let env = undefined;

export function getEnv(){

    if( env === undefined ){
        env = getEnvNoMemo();
    }

    return env;

}
