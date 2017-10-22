<template>
    <div>
        <p> {{ msg }} </p>
        <incrementComponent/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import IncrementComponent from './Increment.vue';

@Component({
    components:{ 
        "incrementComponent": IncrementComponent}
})
export default class App extends Vue {
    msg: string = "Message";
}
</script>
