<template>
<div>
    <form @submit.prevent="onSubmit">
        <label for="index">Enter your index</label>
        <input v-model="index"/>
        <button type="submit">Submit</button>

    </form>
    <h3>Indexes I have seen: <span v-for="(index,key) in seenIndexes" :key="key">{{index.number}}&nbsp;</span>  </h3>

    <h3 v-for="(value,index) in values" :key="index">For index {{index}} I calculated {{value}}</h3>

</div>
  
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            index:"",
            seenIndexes: [],
            values: {},
           
        }
    },
    created() {
        this.fetchValues();
        this.fetchIndexes();
    },
    methods: {
       async fetchValues() {
           const values = await axios.get('/api/values/current');
           this.values = values.data;
        },
        async fetchIndexes() {
            const indexes = await axios.get('/api/values/all');
            this.seenIndexes = indexes.data;
            console.log(indexes.data);
        },
        async onSubmit() {
            await axios.post('/api/values', {
                index: this.index
            });
            this.index = "";
        }
    }
}
</script>

<style>

</style>