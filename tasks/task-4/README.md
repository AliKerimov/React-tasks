# Contexts in React

![Price](img-1.png)

```jsx
<div>
  Total amount: <Price value={5}/>
</div>
```

Yuxarıda verilmiş `<Price/>` componenti render olunduqda ekrana `5.00 AZN` yazmalıdır.
Amma `AZN` currency simvolunu və nöqtədən sonra 2 rəqəmin olacağını `<Price/>` componenti daxilinə hardcode etməməliyik.

`LocaleContext` adlı React Context-i yaradın. Bu context value olaraq `{ currency: { symbol: 'AZN', digits: 2 } }` tutacaq və `<Price/>` componenti özünü render etmək üçün konfiqurasiyaları bu contextin provayderindən çəkməlidir.

# Restrictions
`<Price/>` componenti daxilində heç bir html tag-ı istifadə etməyin. Bu component sadəcə text render etməlidir.

React hooklarından isə sadəcə `React.useContext()` istifadə edin.
