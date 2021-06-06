
const articles = [{id:12345,name:"React",imageUrl:'1.jpg',description:'Merhaba, \
React’i öğrenirken kendi kendime “En iyisi notlar alayım ileride takılırsam dönüp notlarıma bakarım” diye düşüp notlar almaya başladım. Ancak bu not alma işini o kadar\
abartmışım ki günün sonunda dönüp baktığımda “N’aptım ben yahu üniversite sınavına mı hazırlanıyorum ?” diye sordum. Bu yazı 45 sayfalık bir not öbeğinden derlenerek oluşmuştur. React ve Redux’ta öğrendiğim\
her konuya değineceğim. Componentler, state’ler, lifecycle’lar, store’lar, middleware’ler… Kısacası ne ararsanız var. Başlamadan uyarayım çoook uzun bir yazı olacak. :)\
Hikaye kısımları hep beni sıkmıştır; bu nedenle Facebook hikayesini kim bulmuş ne yapmış anlatmayacağım. Yalnız önemli birkaç nokta var;\
Öğrenmeden önce Javascript bilgisine sahip olmalısınız.\
React sadece view(görüntü) katmanıyla ilgilenir. Diğer mimari katmanlarla alakası yoktur.\
Component tabanıyla sanal DOM mimarisi kullanan bir UI kütüphanesidir.\
React clint-side (istemci taraflı) rendering yapar.\
Burada bir şey belirtmek istiyorum. React proje geliştirirken siz de fark edeceksiniz, ayağa kaldırdığınız \
projenizin tarayıcıdaki kaynak koduna baktığınızda uygulamanızda bulunan yazıların html elemanlarının olmadığını sadece tertemiz bir html iskeleti, ortada bir div ve altta bir bundle.js nin olduğunu göreceksiniz.'
},
{
id:12346,name:"Vue.js",imageUrl:'2.jpg',description:'Vue.js web arayüzleri oluşturmak için geliştirilen bir JavaScript kütüphanesidir. Anlatımı yaparken diğer frameworkler ile sık sık karşılaştırma yapacağım.\
SPA geliştirmek için, kullanacağınız kütüphanenin çok fazla işe karışmamasını, sizi esnek bırakmasını ve oldukça basit olmasını istiyorsanız Vue.js tam size göre bir kütüphane.\
Vue.js API ve Tasarım açısından Angular’a göre daha kolaydır. Hızlı bir şekilde öğrenip, uygulama geliştirmeye başlayabiliyorsunuz.\
Vue.js Angular’a göre daha esnek bir yapıdadır. Angular gibi her şeyi onun istediği gibi yapmanızı isteyen, içerisinde belki kullanmayacağınız onlarca özellik olan bir yapı değil.\
Vue’da interface katmanı bulunuyor. Örneğin vue çok basit bir şekilde olsa da, Routing ve AJAX işlevleri birlikte gelse de, genellikle bunun için harici modüller kullanarak uygulamayı inşaa ederiz.\
React ile geliştirme yapanlar bu duruma daha hakimdir. React ile Vue birbirlerine benzer gözükseler de, işin aslı pekte öyle değil. React’in Virtual Dom özelliği bile başlı başına bir farklılık. \
React tecrübem yeterli olmadığı için Vue ile kıyaslama yapamayacağım. Bu konuda karşılaştırma yapacak olanlar, yazıya katkıda bulunabilirse sevinirim 🙂\
Vue.js’de Directive ve Component’lar arasında büyük bir ayrım vardır. Directive’ler sadece DOM manipülasyonları için kullanılırken, Component’lar ise data \
mimarisini saklamak için kullanılır. Angular’da bu durum biraz daha karışık. Basit bir blog sayfasını ele aldığımızda, Header, Navigation, Search, BlogPosts, \
Footer gibi componentler geliştiririz.\
Tab, Modal gibi işleri ise Directive kullanarak yapmayı tercih ederiz.\
Vue.js’in en güzel yanı, bizlere esnek bir yapı sunmasıdır. Karşılaştırmaları sadece Angular üzerinden yaptım.'
},
{
id:12347,name:"Node Express.js",imageUrl:'3.jpg',description:'Herkese Merhaba… Bu yazıda Node.js’in ne olduğundan, Express frameworkden, MongoDb’den, \
restful apilerden konuşup ardından kendi restful apimizi geliştireceğiz. Ardından ise geliştirmiş olduğumuz bu apiyi Postman aracını kullanarak test \
edeceğiz. Sizde hazırsanız lafı daha fazla uzatmadan hemen yazıya geçelim. Node.Js\
Node.js, açık kaynaklı, sunucu tarafında çalışan ve ağ bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır. Node.js uygulamaları genelde\
 istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir. 2009 yılında \
geliştirilmeye başlanmış olan Node.js günümüzde birçok şirket, kurum ve topluluk tarafından kullanılmaktadır.\
Express.Js\
Express.Js Node.Js için geliştirilmiş hızlı, kolay ve sade web framework’dür. Express ile hızlıca http isteklerini (Get, Post, Put, Delete) ve routing \
işlemlerini gerçekleştirebilirsiniz. Express Node.js için bu işlemleri yapabilen tek framework değildir fakat günümüzde en sık kullanılan Node.js frameworkü dür diyebiliriz.\
MongoDB\
MongoDB 2009 yılında geliştirilmiş açık kaynak kodlu bir NoSQL veritabanıdır. Bugün piyasada Cassandra, BigTable, Dynamo gibi birçok NoSQL veritabanı bulunmaktadır. \
Günümüzde aktif olarak kullanılan pek çok programlama dili için driver desteği bulunması bakımından bugün NoSQL sistemler içerisinde en çok tercih edilenlerden biridir.\
Ayrıca benim daha önce yazmış olduğum ‘Nedir Bu MongoDB’ yazısını okumak isterseniz:'
}


];


module.exports = class Article {


    constructor(name,imageUrl,description){
        this.id=(Math.floor(Math.random()*999)+1).toString();

        this.name=name;
        //this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
    }

    saveArticle(){
        articles.push(this);
    }

    static getAll(){
        return articles;
    }

    static getById(id){
        const article = articles.find(i => i.id == id);
        return article;
    }

    static Update(article){
        const index =articles.findIndex(i=>i.id == article.id);
        
        articles[index].name=article.name;
        
        articles[index].imageUrl=article.imageUrl;
        articles[index].description=article.description; 
    }

    static DeleteById(id){
        const index = articles.findIndex(i=>i.id==id);
        articles.splice(index,1);
        return id;
    }
}
