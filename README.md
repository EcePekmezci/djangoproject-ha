# Django ile İHA Kiralama Projesi
Bu proje, React ile oluşturulan bir frontend, Django ile oluşturulan bir backend ve PostgreSQL veritabanı kullanılarak geliştirilmiştir.
## Özellikler
### Üyelik ve Giriş Ekranı 
JWT Token ile kimlik doğrulaması sağlanmıştır. Kullanıcılar, hesap oluşturmak için öncelikle kayıt sayfasından giriş yapmalıdır.

**Registration Page**

<img width="344" alt="registiration_page" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/175320ee-6a65-4d0a-a915-ca5ec41dcee6">

**Login Page**

<img width="443" alt="admin_login" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/bd04ef06-6be0-4413-80cb-fb95f8cb96e6">

### Iha Kiralama Ekranı
Kiralanacak IHA için Title'da modeli, Contentte ise özelliklerin detaylarının girilerek istek oluşturulur, oluşturan kullanıcının bilgileri ve oluşturma tarihi görülebilir. 
 Ekleme, listeleme ve silme işlemleri gerçekleştirilebilir.

 <img width="878" alt="iha_kiralama" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/1bd65cb2-609b-4d5d-a994-53f7ec7edbca">
 
One to many relationship kullanılmıştır. Her bir kullanıcı birden fazla kiralama yapabilir.

<img width="476" alt="iha_kiralama_ekranı" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/9aef2988-b501-4b7d-9bd9-01276dc9e928">


## Backend ve Database Ekran Görüntüleri

<img width="925" alt="backend_apitoken" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/a09f84f0-d326-4737-8c99-e3621ec3f681">

<img width="916" alt="backend_tokenrefresh" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/363de876-e16f-4f6b-a748-6e85eefb0f10">

<img width="935" alt="database" src="https://github.com/EcePekmezci/djangoproject-ha/assets/92378146/cf01d4b7-2245-49cd-be50-3098a8415c86">



