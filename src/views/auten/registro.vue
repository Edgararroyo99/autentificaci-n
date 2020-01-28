<template>
<div class="container">
    <div class="columns">
        <div class="colum is-6 is-offset-3">
            <h3 class="title is-3"> Crear una cuenta</h3><hr>
                <form action="#" @submit.prevent="register"> 
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Nombre" v-model='name'>
                        </div>
                        </div>
                        <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="Email" v-model='correo'>
                        </div>
                        </div>
                        <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password"  placeholder="Contraseña" v-model='password'>
                        </div>


                        <button type="submit" class="button is-primary"> Registrarme</button>
                    </div>
                </form>
                <div class="notification is-danger is-light" v-if="error">
                    {{error}}
                </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript" src="index.js">
export default
{
    var: demo = new Vue({
          el: '#demo',
    data(){
        return {
            name:'',
            correo:'',
            password:'',
            error:''
        }
    }}),
    name:'register',
    methods: {
        register()
        {
            if(name&&correo&&password){
                
            }else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    }
}
</script>