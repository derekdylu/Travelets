<template>
    <form class="add-form">
        <div class="form-control">
            <label>Trip Name</label>
            <input type="text" v-model="tripname" name="tripname" placeholder="Trip Name"/>
        </div>
        <div class="form-control">
            <label>Location</label>
            <input type="text" v-model="search" placeholder="Taipei">
        </div>
        <div class="form-control">
            <label>Start Date</label>
            <input type="text" v-model="startdate" name="startdate" placeholder="2022/05/08"/>
        </div>
        <div class="form-control">
            <label>Duration</label>
            <input type="text" v-model="duration" name="duration" placeholder="Number of Staying Days"/>
        </div>
    </form>
</template>

<script>

    export default{
        name: 'SetTrip',

        data() {
            return{
                tripname: '',
                startdate: '',
                duration: '',
                search: ''
            }
        },
    }
</script>

<style scoped>
.add-form {
  margin-bottom: 15px;
}

.form-control {
  margin: 12px 0;
}

.form-control label {
  display: block;
  font-size: 15px;
  margin-left: 10px;
}

.form-control input {
  width: 90%;
  height: 28px;
  margin: 4px;
  margin-left: 15px;
  padding: 3px 8px;
  font-size: 14px;
  align-items: center;
  border: 1px solid rgb(228, 230, 231);
  background-color: rgb(228, 230, 231);
  border-radius: 20px;
}

</style>