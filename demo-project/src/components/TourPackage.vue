<template>
    <div id="root">
        <div class="title text-center">
    <h1>TOUR PACKAGES</h1>
  </div>
  <div class="input-group md-form form-sm form-2 pl-0">
    <input
      class="form-control my-0 py-1 amber-border"
      type="text"
      placeholder="Items"
      aria-label="Search"
    />
    <div class="input-group-append">
      <span
        class="input-group-text amber lighten-3 searchLabel"
        id="basic-text1"
        >Search</span
      >
    </div>
  </div>
  <br /><br />
  <div class="items">
    <div class="unpackedItems">
      <div class="d-flex unpItemsTitle">
        <h2>Unpacked items</h2>
        <button
          class="btn-hover color-5"
          style="height: 30px;font-family: 'Roboto';"
          @click="packItems()"
        >
          Add
        </button>
      </div>
      <div class="upiList">
        <form>
          <div v-for="(item, index) in renderUnpackedItems" :key="index">
            <input type="checkbox" :id="item.id" :value="item.id" v-model="items_packed"/>
            <label :for="item.id">{{item.name}}</label>
          </div>
        </form>
      </div>
    </div>
    <hr />
    <div class="packedItems">
      <h2>Packed items</h2>
      <div class="piItems">
        <ul>
          <div class="piList d-flex" v-for="(item,index) in itemsPacked" :key="index">
            <li>{{item.name}}</li>
            <button class="btn-hover color-11" style="font-family: 'Roboto';">
              Remove
            </button>
          </div>
        </ul>
      </div>
    </div>
 
  </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
             tourItems:[
                {id:1,name:'Tour Item one',packed:false},
                {id:2,name:'Tour Item two',packed:false},
                {id:3,name:'Tour Item three',packed:true},
                {id:4,name:'Tour Item four',packed:false},
            ],

            items_packed:[],
            itemsPacked:[],
        }
    },
    methods: {
      packItems(){
        this.itemsPacked =  this.tourItems.filter((item)=>{
           return this.items_packed.includes(item.id);
        });
      },
    },
    computed: {
      renderUnpackedItems(){
        return this.tourItems.filter(x => x.packed == false);
      },
    }
}
</script>

<style scoped>
 body {
    background: #f09819; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #edde5d,
      #f09819
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #edde5d,
      #f09819
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: "Lobster";
  }
  #root {
    background: #ffefba; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffffff,
      #ffefba
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    max-width: 25vw;
  }
  .input-group.md-form.form-sm.form-2 input.amber-border {
    border: 2px solid #ffca28;
    outline: none !important;
    margin-top: 10px !important;
  }
  #root input {
    outline: none !important;
  }
  .searchLabel {
    background: #ffca28;
    margin-top: 10px;
    cursor: pointer;
    outline: none !important;
    color: white;
  }

  /* checkbox */
  input[type="checkbox"] + label {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label:before {
    content: "\2714";
    border: 0.1em solid #000;
    border-radius: 0.2em;
    display: inline-block;
    padding-bottom: 1.5em;
    width: 1.5em;
    height: 0.1em;
    padding-left: 0.2em;
    margin-right: 0.7em;
    vertical-align: bottom;
    color: transparent;
    transition: 0.2s;
  }

  input[type="checkbox"] + label:active:before {
    transform: scale(0);
  }

  input[type="checkbox"]:checked + label:before {
    background-color: #efa122;
    border-color: #efa122;
    color: #fff;
  }

  input[type="checkbox"]:disabled + label:before {
    transform: scale(1);
    border-color: #aaa;
  }

  input[type="checkbox"]:checked:disabled + label:before {
    transform: scale(1);
    background-color: #bfb;
    border-color: #bfb;
  }
  .title h1 {
    color: #f85957;
  }
  .title {
    padding-top: 15px;
  }
  .items {
    /* display: flex;
    justify-content: space-around; */
    padding: 20px;
    /* background: navajowhite; */
  }
  .items h2 {
    color: #ef9b1c;
  }
  /* .unpackedItems {
    padding: 20px;
    background: navajowhite;
  }
  .packedItems {
    padding: 20px;
    background: navajowhite;
  } */

  .piLIst {
    justify-content: space-between;
    margin-bottom: 10px;
  }

  /* button */
  .btn-hover {
    width: 80px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    outline: none;
  }

  .btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .btn-hover.color-11 {
    background-image: linear-gradient(
      to right,
      #eb3941,
      #f15e64,
      #e14e53,
      #e2373f
    );
    box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
  }
  .btn-hover.color-5 {
    background-image: linear-gradient(
      to right,
      #0ba360,
      #3cba92,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  }
  .unpItemsTitle {
    justify-content: space-between;
  }
</style>