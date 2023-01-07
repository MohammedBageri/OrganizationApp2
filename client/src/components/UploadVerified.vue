<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
            <v-card rounded="xl">
                <v-card-title>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="بحث"
                        single-line
                        reverse
                        >
                    </v-text-field>
                </v-card-title>
                <v-data-table 
                    :headers="headers"
                    :search="search"
                    :items="information"
                    class="elevation-1 rounded-br-xl rounded-bl-xl"
                >
                <template v-slot:item.action="{item}">
                    <v-icon small>mdi-text-box-plus-outline</v-icon>

                </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        search: "",
    headers: [
    {
        text: "الإسم",
        align: "center",
        sortable: false,
        filterable: true,
        value:"name"
      },
      { text: "الحالة", align:"center", sortable: false, value:"verfied" },

      { text: "رفع التصريح",align:"center", value: "actions", sortable: false },
    ],
    information: [
      {
        name: 'Salem',
        verfied: "checked"
      }
    ]
    })
    
}
</script>

<style scoped>

</style>