# Oxford Sözlüğü

## Kurulum

ReactJS

## Özellikler

 - Oxford Sözlüğü'nün 3000 kelimelik listesinin harf bazında sınıflandırılması.
 - İki uygulama bölümü vardır. Türkçe - İngilizce ve İngilizce Türkçe.
 - Alıştırmaların mantığı örneğin Türkçe alıştırmada ilk başta sadece İngilizce kelimeler var. Kelimeye basılırsa Türkçe karşılığı açılır.

## Başlangıç

Bu depoyu yerel makinenizde klonlayın.

```
git clone https://github.com/ibrahimaykutbas/the-oxford-dictionary
```

## Kullanım

Projeyi klonladıktan sonra kullanmak için:

```
cd the-oxford-dictionary
cd .
```

Proje bağımlılıklarını yüklemek için proje klasörüne aşağıdaki komutları çalıştırın.

```
npm init
npm install
```

Bu talimatlar, geliştirme ve test amacıyla yerel makinenizde projenin bir kopyasını hazır ve çalışır hale getirecektir.

## Kullanılabilir Komut Dosyaları

Proje dizininde şunları çalıştırabilirsiniz:

```
npm start
```

Uygulamayı geliştirme modunda çalıştırır.

```
http://localhost:3000
```

## API

Projede API kullanıldığı için json sunucusunun başlatılması gerekiyor.

Bu işlemin farklı bir terminal sekmesinde yapılması gerekiyor.

Üst dizine giderek api klasörüne gidin.

```
cd..
cd api
json-server --watch db.json
```

Bu işlem 3000 numaralı bağlantı noktasında çalışacaktır.

Bu nedenle, 3000 numaralı bağlantı noktasında çalışan uygulama çalışmayacaktır. Projenin yürütüldüğü terminale gidilerek proje yeniden başlatılır.

```
CTRL+C
Y
npm start
Yes
```

## Daha Fazla Bilgi İçin
Daha fazlasını şuradan öğrenebilirsiniz: [Create React App documentation](https://create-react-app.dev/docs/getting-started/).<br/><br/>
React'i öğrenmek için şuraya göz atın: [React documentation](https://reactjs.org/).
