// DropdownComponent.js

export default {
    props: ['options', 'placeholderText', 'allText'],
    data() {
        return {
            selectedOptions: [],
            search: '',
            dropdownOpen: false,
            allSelected: false
        };
    },
    computed: {
        filteredOptions() {
            return this.options.filter(option => 
                option.text.toLowerCase().includes(this.search.toLowerCase())
            );
        },
        placeholder() {
            if (this.selectedOptions.length > 0) {
                return this.selectedOptions.map(value => {
                    const option = this.options.find(opt => opt.value === value);
                    return option ? option.text : '';
                }).join(', ');
            } else {
                return this.placeholderText;
            }
        },
        shouldShowAllOption() {
            return this.options.length >= 3;
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        openDropdown() {
            this.dropdownOpen = true;
            document.addEventListener('click', this.handleClickOutside);
        },
        closeDropdown() {
            this.dropdownOpen = false;
            document.removeEventListener('click', this.handleClickOutside);
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.closeDropdown();
            }
        },
        toggleAll() {
            if (this.allSelected) {
                this.selectedOptions = this.options.map(option => option.value);
            } else {
                this.selectedOptions = [];
            }
        },
        checkAllSelected() {
            this.allSelected = this.selectedOptions.length === this.options.length;
        }
    },
    template: `
        <div class="dropdown" @click.stop>
            <input type="text" class="form-control" :placeholder="placeholder" @focus="openDropdown" readonly>
            <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
                <li class="px-3 py-2">
                    <input type="text" class="form-control search-input" placeholder="Search..." v-model="search">
                </li>
                <li class="m-2 p-1" v-if="shouldShowAllOption" @click.stop>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="allSelected" @change="toggleAll">
                        <label class="form-check-label">
                            {{ allText }}
                        </label>
                    </div>
                </li>
                <li v-for="option in filteredOptions" :key="option.value" @click.stop class="m-2 p-1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" :value="option.value" v-model="selectedOptions" @change="checkAllSelected">
                        <label class="form-check-label">
                            {{ option.text }}
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    `
};
