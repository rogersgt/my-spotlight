<template>
<section class="backgroundImg">
    <div id="search" class="box">
        <ul class="v-list">
            <li>
                <select v-model="state" class="" name="">
                <option value="">Select a State</option>
                <option v-for="s in states" v-bind:value="s">{{s}}</option>
             </select>
            </li>
            <li>
                <input v-model="city" type="text" name="" value="" placeholder="City">
            </li>
            <li>
                <button v-on:click="submit" id="sbmt" type="button" name="button">Submit</button>
            </li>
        </ul>

    </div>
    <div class="box results">
        <ul class="v-list">
            <li v-for="venue in venues">
                <h3>{{venue.name}}</h3>
                <div class="contact" v-if="showResults">
                    Phone: {{venue.contact.phone}} Twitter: {{venue.contact.twitter}}
                </div>
            </li>
        </ul>
    </div>
</section>
</template>














<script src="./controller.js" charset="utf-8"></script>
