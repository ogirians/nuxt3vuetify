<template>
    <div>
    <v-container>
        <div class="mx-5">
            <div class="text-h6 text-md-h5 mb-3">
            Find a new pet
            </div>
            <v-row>
                <v-col class="col-12">
                    <v-text-field
                        label="Cari pet.."
                        placeholder="Cari pet.."
                        solo
                        prepend-inner-icon="mdi mdi-magnify"
                        clearable   
                        dense
                        
                        :elevation="4"
                    >
                    <template v-slot:append-outer>
                        <v-btn class="mt-n1 ml-3" :elevation="0" outlined color="grey">
                            <v-icon>
                                mdi mdi-tune
                            </v-icon>
                            <!-- filter -->
                        </v-btn>
                    </template>
                    </v-text-field>
                </v-col>
                
                <!-- <v-col class="col-2">
                    <v-icon>
                        mdi mdi-tune
                    </v-icon>
                </v-col> -->
            </v-row>
            <v-card
                height="170"
                class="rounded-xl mb-5"
                style="background-color : #ffe9ca"
                flat
            >
            <v-container>
                <v-row>
                    <v-col class="ma-3" cols="6">
                        <div class="text-h5 text-md-h4">
                            <b>Cat Lover?</b>
                        </div>
                        <div class="text-h8 text-md-h7 mb-4">
                            Join our community
                        </div>
                        <v-btn elevation="0" dark class="rounded-lg mb-5" color="secondary" style="text-transform: none;"
                        >
                            Join now
                        </v-btn>
                        
                    </v-col>
                    <v-col cols="6"></v-col>
                </v-row>
            </v-container>
            </v-card>
            <div class="text-h6 text-md-h5 mb-3 mt-5">
                Pet Categories
            </div>
            <!-- <v-sheet
                class="mx-auto"
                max-width="700"
            > -->
                
            <!-- </v-sheet> -->
        </div>
        
        <v-row class="mb-5">
            <v-col  
            cols="12" sm="4"
            v-for="n in 5"
            :key="n"
            >
                <v-card
                    height="200"
                    class="mx-4 mt-5 rounded-xl"
                    style="background-color : #ffe9ca"
                    flat 
                >
                    <v-container>
                        disini poto kuceng
                    </v-container>
                </v-card>
                <v-card
                flat
                height="80"
                color="white"
                class="mx-4 mt-n15 rounded-xl"
                >
                    <v-container>
                        ini penjelasan
                    </v-container>
                </v-card>
            </v-col>          
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model: null,
        }
    }
}

</script>