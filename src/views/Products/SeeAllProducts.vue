<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">
          Tous les produits
          <span style="font-weight: 300; color: #686868">( {{ filteredData.length }} )</span>
        </h4>
      </div>
    </div>
    <div class="row">
      <div
        class="
          col-md-3 col-xl-2 col-12
          pt-3
          text-left
          justify-content-around-d-flex
        "
      >
        <h6>Filtres</h6>
        <div id="categoryCheckboxes">
          <h6><span style="font-weight:bold">Catégorie</span></h6>
          <div
            v-for="(category, index) in filters"
            :key="index"
            class="form-check"
          >
            <div v-if="category.category == 'categories'">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="category.checked"
                @change="getFilteredData()"
              />
              <label class="form-check-label">
                {{ category.name }}
              </label>
            </div>
          </div>
        </div>
 
        <div id="familyCheckboxes">
          <h6><span style="font-weight:bold">Maison</span></h6>
          <div
            v-for="(house, index) in filters"
            :key="index"
            class="form-check"
          >
            <div v-if="house.category == 'families'">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="house.checked"
                @change="getFilteredData()"
              />
              <label class="form-check-label">
                {{ house.name }}
              </label>
            </div>
          </div>
        </div>
        <div id="yearCheckboxes">
          <h6><span style="font-weight:bold">Année</span></h6>
          <div
            v-for="(bottled_year, index) in filters"
            :key="index"
            class="form-check"
          >
            <div v-if="bottled_year.category == 'bottled_year'">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="bottled_year.checked"
                @change="getFilteredData()"
              />
              <label class="form-check-label">
                {{ bottled_year.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div
            v-for="(product_, index) in filteredData"
            :key="index"
            class="col-md-6 col-xl-4 col-12 pt-3 justify-content-arround d-flex"
          >
            <ProductBox :product="product_" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "@/components/ProductBox.vue";
export default {
  components: { ProductBox },

  props: ["products", "categories", "families"],

  data() {
    return {
      msg: "",
      filteredData: [],
    };
  },

  computed: {
    filters() {
      let filters = [];
      this.categories.forEach((cat) => {
        filters.push({
          checked: false,
          category: "categories",
          name: cat.category_name,
          value: cat.id_category,
        });
      });
      this.families.forEach((family) =>
        filters.push({
          checked: false,
          category: "families",
          name: family.family_name,
          value: family.id_family,
        })
      );
      //   éviter les doublons dans les dates
      this.products.forEach((product) => {
        let hasYear = filters.some((filter) => {
          return filter.value == product.bottled_year;
        });
        if (!hasYear) {
          filters.push({
            checked: false,
            category: "bottled_year",
            name: product.bottled_year,
            value: product.bottled_year,
          });
        }
      });
      return filters;
    },
  },

  methods: {
    getFilteredData() {
      let checkedFilters;
      let selectedFilters = [];

      checkedFilters = this.filters.filter((obj) => obj.checked);
      checkedFilters.forEach((element) => {
        selectedFilters.push({
          value: element.value,
          category: element.category,
        });
      });
      this.selectedFilters = selectedFilters;

    //   console.log("click", this.filters, selectedFilters);

      this.filteredData = this.products;
      if (selectedFilters.length > 0) {
        let selectedCategoryFilters = [];
        // let selectedPrixFilters = [];
        let selectedFamilyFilters = [];
        let selectedBottledYearFilters = [];

        selectedFilters.forEach((filter) => {
          //   selectedCategoryFilters.push(filter.value);
          switch (filter.category) {
            case "categories":
              selectedCategoryFilters.push(filter.value);
              break;
            case "families":
              selectedFamilyFilters.push(filter.value);
              break;
            case "bottled_year":
              selectedBottledYearFilters.push(filter.value);
              break;
          }
        });

        console.log(
          selectedCategoryFilters,
          selectedFamilyFilters,
          selectedBottledYearFilters
        );

        const filters = {
          category: selectedCategoryFilters,
          //   price: selectedPrixFilters,
          family: selectedFamilyFilters,
          bottled_year: selectedBottledYearFilters,
        };
        console.log(filters);
        const filterKeys = Object.keys(filters);
        const validData = this.filteredData.filter((produit) => {
          return filterKeys.every((categorieKey) => {
            // pour les catégories où aucune checkbox selected
            if (filters[categorieKey].length == 0) {
              return true;
            }
            if (categorieKey == "category") {
              return filters[categorieKey].find(
                (filter) => filter === produit["id_category"]
              );
            }
            if (categorieKey == "family") {
              return filters[categorieKey].find(
                (filter) => filter === produit["id_family"]
              );
            }
            // Pour les filtres simples ( ex sexe )
            return filters[categorieKey].find(
              (filter) => filter === produit[categorieKey]
            );
          });
        });
        this.filteredData = validData;
      }
    },
  },

  mounted() {
    if (this.products.length == 0) {
      this.msg = "Aucun produit";
    } else {
      this.msg = `( ${this.products.length} )`;
    }

    this.getFilteredData();
  },
};
</script>