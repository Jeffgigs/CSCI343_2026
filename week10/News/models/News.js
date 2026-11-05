class News {
    constructor(
      id,
      headline,
      date,
      author,
      agency,
      description,
      imageUrl,
    ) {
      this.id = id;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  
    toString() {
      return `ID: ${this.id} | Headline ${this.headline} | Date: ${this.date} | Author: ${this.author} | Agency: ${this.agency} | Description: ${this.description} | Image: ${this.imageUrl}`;
     }
    }
  
  export default News;