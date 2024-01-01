# Expectations:

## Framework : React

## Kalkış havaalanı, varış havaalanı, kalkış tarihi, dönüş tarihi seçilebilen bir arama kutusu yapılmalı
![navbar](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/9a1a74ec-5240-4667-9eee-6ed080f64ad6)
</br></br></br>

## “Tek yönlü uçuş” olduğunu belirten bir seçenek olmalı. Bu seçildiyse dönüş tarihi girilmemeli.

![one-way navbar](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/c773de36-3e40-4178-bd7c-d05a69059398)
</br></br></br>

## Kalkış ve varış havaalanı input kutularında yazıldığı anda havaalanları koda ve şehre göre search edilmeli ve uygun olanlar listelenmeli.

![biniş iniş gösterme](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/9965f85f-8699-4446-810e-5059ae478699)
</br></br></br>

## Kalkış ve dönüş tarihi input kutularında datepicker kullanılmalı.

![datepicker kullanma](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/3478f528-3319-4bb0-afb5-181d9b965b1e)
</br></br></br>

## Dönüş tarihi ile verilerin çekilmesi

![roundtrip](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/1084f635-ee6c-45aa-9b5c-4ec109b15949)
</br></br></br>

# Tüm alanların validasyonu yapılmalı

## Input değerleri boş ise

![boş inputların validasyonu](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/7217c0a7-7282-4fb7-8c5a-7f9ef682e5a2)
</br></br></br>

## Return date var ise

![return date görünürse validasyon](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/5deac7f4-05d6-484f-8c3b-f9b64f2ce078)
</br></br></br>

## Dönüş tarihi gidiş tarihinden önce olamaz

![return date gidişten önce olamaz](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/485be9ff-ca57-4e39-b4d4-d8c25d27ad8c)
</br></br></br>

## İniş ve biniş input değerleri aynı olamaz

![havaalanları aynı olamaz](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/f925971b-3282-4d8f-9485-ff3b98e34c56)
</br></br></br>

# Listeleme Özelliği:

## Listelenen uçuşlar kalkış saati, dönüş saati, uçuş uzunluğu, ya da fiyata göre sıralanabilmeli

![fiyata göre sıralama](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/126cf814-0963-41c8-87fe-db50e4c3b99c)
</br>
![fiyata göre sıralama 2](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/16d93dd5-6a48-4ab7-9ef2-957591c49ace)
</br></br></br>

## Sunucudan cevap gelene kadar kullanıcıya “yükleniyor” animasyonu gösterilmeli
![search](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/4281b21c-c09f-43b6-876e-cd37bcf34505)

</br></br></br>

## Listelenen uçuşların detay bilgileri gösterilmeli (havayolu, şehir, vs.)

![detay uçuş](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/65a5488f-f91c-4fe0-9891-f158e054d0c2)
</br></br></br>

# Hata Kontrolü

## Sunucudan gelen tüm hata durumları handle edilmeli

![ara butonuna basıktan sonra hata kontrolü](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/a8851c93-cc0a-45e1-bc34-396ab0bb9273)
</br>
![fetch error kontrolü](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/f330c56d-5715-45c5-89e1-863e9636d090)
</br></br></br>

# Mock Data

## Tüm API istekleri için bir mock API ve mock data oluşturulmalı. Frontend buna yapılan istekler üzerinden çalışmalı.

![parametre olarak id oluşturma](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/93f223cd-e44f-4084-ae72-a92b170f93a7)
</br>
![useparams ile id çekip veri gösterme](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/a0997f41-feb0-4b6b-a04a-e24b03fe5759)
</br></br></br>

# Boş data kontrolü:

## Sunucudan boş data gelmesi durumu handle edilmeli

![boş data gelmesi durumunda](https://github.com/oguzz0804/Case-Study-Flight-Search-Application/assets/68377756/347fdc94-e1fb-4f91-a79b-519cf6f12c04)
</br></br></br>

### For the starting json-server : npx json-server -p 3500 -w data/flights.json

## If you are going to search by airport codes, enter 3-letter values in the inputs.

### For example; IST - LHR
