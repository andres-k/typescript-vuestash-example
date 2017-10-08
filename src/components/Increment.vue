<template>
    <div>
        <p>
            {{ incrementalValue }}
        </p>
        <button @click="increaseValue">Add!</button>
        <button @click="decreaseValue">Decrease!</button>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class IncrementComponent extends Vue {
    incrementalValue: number = 0;

    increaseValue() {
        this.incrementalValue++;
    }

    decreaseValue() {
        this.incrementalValue--;
    }
}
</script>
