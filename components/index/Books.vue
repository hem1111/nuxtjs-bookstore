<template>
  <div class="container">
    <div class="category">
      <h1 class="is-size-5">Trending Books</h1>
    </div>
    <br />
    <div class="columns is-multiline is-mobile">
        <div class="column is-4-tablet is-3-desktop" v-for="(book,index) in books" :key="index">
        <div class="card">
          <div class="card-image">
              <figure class="image is-4by4">
                <img :src="book.img" :alt="book.name"/>
              </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p>{{ book.name }}</p>
                <p class="subtitle">Author Name: {{book.authorName}}</p>
                <div class="content">{{ book.desc }}</div>
                <button class="button is-info is-radiusless">
                  <b>Add to Order</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</div>
</template>

<script>
export default{
  name: "Books",
  data(){
    return{
      books: [
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          price: '1800',
          authorName: 'Paulo Coelho',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        },
        {
          img: 'https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg',
          name: 'The Alchemist',
          authorName: 'Paulo Coelho',
          price: '1800',
          desc: 'The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found'
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 96px;
  margin-bottom: 96px;
}

.column {
  display: flex;
  .image {
    max-height:300px;
    width: 100%;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
    width: 100%;
    border: solid 1px #e3e3e3;
    box-shadow: none;
    .card-image {
      flex: 1;
    }
    .card-content {
      flex: 1;
      padding-top: 0;
      padding-bottom: 0;
      display: flex;
      align-items: flex-end;
      .subtitle {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 16px;
        margin-top: 8px;
      }
    }

    figure {
      overflow: hidden;
      img {
        transition: 250ms;
      }
    }

    &:hover {
      img {
        transform: scale(1.15);
        transition: transform 500ms;
      }
    }
  }
}

.category {
  background: #fafaf1;
  h1 {
    background-color: #00d1b2;
    width: 200px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    color: #fff;
  }
  h1::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: #fafafa;
    border: #00d1b2 19px solid;
    border-right: transparent 24px solid !important;
    top: 0;
  }
}

.banner {
  img {
    margin: auto;
  }
}
</style>