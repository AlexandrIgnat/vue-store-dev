<template>
    <ul class="catalog__pagination pagination">
        <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" @click.prevent="currPage(page-1)" :disabled="page === 1" :class="{'pagination__link--disabled' : page === 1}" aria-label="Предыдущая страница">
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
            </a>
        </li>
        <li v-for="(pageNum, key) of pages" :key="key" class="pagination__item">
            <a class="pagination__link" href="#" @click.prevent="currPage(pageNum)" :class="{'pagination__link--current' : pageNum === page}">
                {{ pageNum }}
            </a>
        </li>
        <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" @click.prevent="currPage(page+1)" :class="{'pagination__link--disabled' : page === pages}"  href="#" aria-label="Следующая страница">
                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    model: {
        prop: 'page',
        event: 'currPage',
    },
    props: ['page', 'count', 'perPage'],
    computed: {
        pages() {
            return Math.ceil(this.count / this.perPage);
        },
    },
    methods: {
        currPage(page) {
          this.$emit('currPage', page);  
        },
    }

}
</script>

