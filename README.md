### Expectations:

## Framework : React

# Kalkış havaalanı, varış havaalanı, kalkış tarihi, dönüş tarihi seçilebilen bir arama kutusu yapılmalı
![navbar](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/9a1a74ec-5240-4667-9eee-6ed080f64ad6)


# “Tek yönlü uçuş” olduğunu belirten bir seçenek olmalı. Bu seçildiyse dönüş tarihi girilmemeli.

![one-way](/amadeus%20images/one-way%20navbar.jpg)

# Kalkış ve varış havaalanı input kutularında yazıldığı anda havaalanları koda ve şehre göre search edilmeli ve uygun olanlar listelenmeli.

![searching](/amadeus%20images/biniş%20iniş%20gösterme.jpg)

# Kalkış ve dönüş tarihi input kutularında datepicker kullanılmalı.

![datepicker](/amadeus%20images/datepicker%20kullanma.jpg)

## Tüm alanların validasyonu yapılmalı

# Input değerleri boş ise

![empty-input](/amadeus%20images/boş%20inputların%20validasyonu.jpg)

# Return date var ise

![return-date](/amadeus%20images/return%20date%20görünürse%20validasyon.jpg)

# Dönüş tarihi gidiş tarihinden önce olamaz

![return-date](/amadeus%20images/return%20date%20gidişten%20önce%20olamaz.jpg)

# İniş ve biniş input değerleri aynı olamaz

![not same](/amadeus%20images/havaalanları%20aynı%20olamaz.jpg)

### Listeleme Özelliği:

# Listelenen uçuşlar kalkış saati, dönüş saati, uçuş uzunluğu, ya da fiyata göre sıralanabilmeli

![sorting](/amadeus%20images/fiyata%20göre%20sıralama.jpg)
![sorting](/amadeus%20images/fiyata%20göre%20sıralama%202.jpg)

# Sunucudan cevap gelene kadar kullanıcıya “yükleniyor” animasyonu gösterilmeli

![loading](/amadeus%20images/search%20edilmesi.mp4)

# Listelenen uçuşların detay bilgileri gösterilmeli (havayolu, şehir, vs.)

![detail](/amadeus%20images/detay%20uçuş.jpg)

### Hata Kontrolü

# Sunucudan gelen tüm hata durumları handle edilmeli

![errors](/amadeus%20images/ara%20butonuna%20basıktan%20sonra%20hata%20kontrolü.jpg)
![errors](/amadeus%20images/fetch%20error%20kontrolü.jpg)

### Mock Data

# Tüm API istekleri için bir mock API ve mock data oluşturulmalı. Frontend buna yapılan istekler üzerinden çalışmalı.

![mock-data](/amadeus%20images/parametre%20olarak%20id%20oluşturma.jpg)
![mock-data](/amadeus%20images/useparams%20ile%20id%20çekip%20veri%20gösterme.jpg)

### Boş data kontrolü:

# Sunucudan boş data gelmesi durumu handle edilmeli

![empty-data](/amadeus%20images/boş%20data%20gelmesi%20durumunda.jpg)

For the starting json-server : npx json-server -p 3500 -w data/flights.json

# If you are going to search by airport codes, enter 3-letter values in the inputs.

For example; IST - LHR
