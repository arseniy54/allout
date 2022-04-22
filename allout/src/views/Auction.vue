<template>

</template>

<script>
import axios from 'axios';
import Alert from './Alert';



export default {
  data() {
    return {
      books: [],
      AddLot: {
        title: '',
        author: '',
        read: [],
      },
    };
  },
  components: {
    alert: Alert,
  },

  

};
</script>
