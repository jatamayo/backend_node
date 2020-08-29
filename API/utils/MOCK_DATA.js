const moviesMock = [
    {
        "id": "e649e846-ce7f-45ae-ba42-a80a6e70ecd7",
        "title": "Play the Game",
        "year": 2005,
        "cover": "http://dummyimage.com/129x143.png/ff4444/ffffff",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "duration": 1988,
        "contentRating": null,
        "source": "https://tripod.com/nisl/nunc/rhoncus/dui/vel.jpg?sem=semper&duis=est&aliquam=quam&convallis=pharetra&nunc=magna&proin=ac&at=consequat&turpis=metus&a=sapien&pede=ut&posuere=nunc&nonummy=vestibulum&integer=ante&non=ipsum&velit=primis&donec=in&diam=faucibus&neque=orci&vestibulum=luctus&eget=et&vulputate=ultrices&ut=posuere&ultrices=cubilia&vel=curae&augue=mauris&vestibulum=viverra&ante=diam&ipsum=vitae&primis=quam&in=suspendisse&faucibus=potenti&orci=nullam&luctus=porttitor&et=lacus&ultrices=at&posuere=turpis&cubilia=donec&curae=posuere&donec=metus&pharetra=vitae&magna=ipsum&vestibulum=aliquam&aliquet=non&ultrices=mauris&erat=morbi&tortor=non&sollicitudin=lectus&mi=aliquam&sit=sit&amet=amet&lobortis=diam&sapien=in&sapien=magna&non=bibendum&mi=imperdiet&integer=nullam&ac=orci&neque=pede&duis=venenatis&bibendum=non&morbi=sodales&non=sed&quam=tincidunt&nec=eu&dui=felis&luctus=fusce&rutrum=posuere&nulla=felis&tellus=sed&in=lacus&sagittis=morbi&dui=sem&vel=mauris&nisl=laoreet&duis=ut&ac=rhoncus&nibh=aliquet&fusce=pulvinar&lacus=sed&purus=nisl&aliquet=nunc",
        "tags": [
            "Documentary",
            "Action|Adventure|Thriller",
            "Drama"
        ]
    },
    {
        "id": "cb430adb-e0ba-4f06-8c40-bdde137d1f73",
        "title": "Rewrite, The",
        "year": 1996,
        "cover": "http://dummyimage.com/242x106.bmp/ff4444/ffffff",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "duration": 1961,
        "contentRating": null,
        "source": "https://pagesperso-orange.fr/sagittis/dui/vel/nisl/duis.png?luctus=ligula&et=suspendisse&ultrices=ornare&posuere=consequat&cubilia=lectus&curae=in&nulla=est&dapibus=risus&dolor=auctor&vel=sed&est=tristique&donec=in&odio=tempus&justo=sit&sollicitudin=amet&ut=sem&suscipit=fusce&a=consequat&feugiat=nulla&et=nisl&eros=nunc&vestibulum=nisl&ac=duis&est=bibendum&lacinia=felis&nisi=sed&venenatis=interdum&tristique=venenatis&fusce=turpis&congue=enim&diam=blandit&id=mi&ornare=in&imperdiet=porttitor&sapien=pede&urna=justo&pretium=eu&nisl=massa&ut=donec&volutpat=dapibus&sapien=duis&arcu=at&sed=velit&augue=eu&aliquam=est&erat=congue&volutpat=elementum&in=in&congue=hac&etiam=habitasse&justo=platea&etiam=dictumst&pretium=morbi&iaculis=vestibulum&justo=velit&in=id&hac=pretium&habitasse=iaculis&platea=diam&dictumst=erat&etiam=fermentum&faucibus=justo&cursus=nec&urna=condimentum&ut=neque",
        "tags": [
            "Comedy|Drama",
            "Documentary|IMAX",
            "Comedy|Drama",
            "Comedy|Drama|Romance",
            "Horror|Mystery|Thriller"
        ]
    },
    {
        "id": "3b0acd64-58b2-44d7-a064-e92629349343",
        "title": "Forsaken, The",
        "year": 2009,
        "cover": "http://dummyimage.com/130x111.png/dddddd/000000",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "duration": 1952,
        "contentRating": null,
        "source": "http://g.co/ut/blandit/non/interdum/in.jsp?justo=turpis&maecenas=donec&rhoncus=posuere&aliquam=metus&lacus=vitae&morbi=ipsum",
        "tags": [
            "Action|Comedy|Crime|Drama",
            "Documentary",
            "Drama",
            "Comedy"
        ]
    },
    {
        "id": "3677e628-f886-49e6-aa27-3c122083e4cc",
        "title": "Stay Hungry",
        "year": 1995,
        "cover": "http://dummyimage.com/164x241.png/dddddd/000000",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "duration": 1984,
        "contentRating": null,
        "source": "http://cyberchimps.com/mauris/sit/amet/eros.aspx?sem=nulla&duis=quisque&aliquam=arcu&convallis=libero&nunc=rutrum&proin=ac&at=lobortis&turpis=vel&a=dapibus&pede=at&posuere=diam&nonummy=nam&integer=tristique&non=tortor&velit=eu",
        "tags": [
            "Crime|Drama|Mystery|Thriller"
        ]
    },
    {
        "id": "e89e0e33-f197-4460-8b1f-b3a4b5d3c0ca",
        "title": "Between the Folds",
        "year": 1999,
        "cover": "http://dummyimage.com/193x141.bmp/5fa2dd/ffffff",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "duration": 1896,
        "contentRating": null,
        "source": "http://spiegel.de/posuere/cubilia/curae/mauris/viverra/diam.jsp?vulputate=eget&luctus=orci&cum=vehicula&sociis=condimentum",
        "tags": [
            "Action|Crime|Thriller"
        ]
    },
    {
        "id": "60e45ff4-da4b-403b-8aee-6bd1be27a300",
        "title": "Deathwatch",
        "year": 1995,
        "cover": "http://dummyimage.com/155x188.jpg/ff4444/ffffff",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "duration": 1986,
        "contentRating": null,
        "source": "http://skyrock.com/sed/augue/aliquam/erat/volutpat/in.aspx?lobortis=quis&est=lectus&phasellus=suspendisse&sit=potenti&amet=in&erat=eleifend&nulla=quam&tempus=a&vivamus=odio&in=in&felis=hac&eu=habitasse&sapien=platea&cursus=dictumst&vestibulum=maecenas&proin=ut&eu=massa&mi=quis&nulla=augue&ac=luctus&enim=tincidunt&in=nulla&tempor=mollis&turpis=molestie&nec=lorem&euismod=quisque&scelerisque=ut&quam=erat&turpis=curabitur&adipiscing=gravida&lorem=nisi&vitae=at&mattis=nibh&nibh=in&ligula=hac",
        "tags": [
            "Action|Drama|Thriller",
            "Documentary",
            "Drama",
            "Drama",
            "Drama"
        ]
    },
    {
        "id": "650fcdc2-5508-4387-b424-1ca2d2f42443",
        "title": "Balzac and the Little Chinese Seamstress (Xiao cai feng)",
        "year": 1998,
        "cover": "http://dummyimage.com/173x178.png/dddddd/000000",
        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "duration": 1915,
        "contentRating": null,
        "source": "http://chronoengine.com/neque/sapien.js?luctus=dolor&et=sit&ultrices=amet&posuere=consectetuer&cubilia=adipiscing&curae=elit&duis=proin&faucibus=risus&accumsan=praesent&odio=lectus&curabitur=vestibulum&convallis=quam&duis=sapien&consequat=varius&dui=ut&nec=blandit&nisi=non&volutpat=interdum&eleifend=in&donec=ante&ut=vestibulum&dolor=ante&morbi=ipsum&vel=primis&lectus=in&in=faucibus&quam=orci&fringilla=luctus&rhoncus=et&mauris=ultrices&enim=posuere&leo=cubilia&rhoncus=curae&sed=duis&vestibulum=faucibus&sit=accumsan&amet=odio&cursus=curabitur&id=convallis&turpis=duis&integer=consequat&aliquet=dui&massa=nec&id=nisi&lobortis=volutpat&convallis=eleifend&tortor=donec&risus=ut&dapibus=dolor&augue=morbi&vel=vel&accumsan=lectus&tellus=in&nisi=quam&eu=fringilla&orci=rhoncus&mauris=mauris&lacinia=enim&sapien=leo&quis=rhoncus&libero=sed&nullam=vestibulum&sit=sit&amet=amet&turpis=cursus&elementum=id&ligula=turpis&vehicula=integer&consequat=aliquet&morbi=massa&a=id&ipsum=lobortis&integer=convallis&a=tortor&nibh=risus&in=dapibus&quis=augue&justo=vel&maecenas=accumsan&rhoncus=tellus&aliquam=nisi&lacus=eu&morbi=orci&quis=mauris&tortor=lacinia&id=sapien&nulla=quis&ultrices=libero&aliquet=nullam&maecenas=sit&leo=amet&odio=turpis&condimentum=elementum&id=ligula&luctus=vehicula&nec=consequat&molestie=morbi&sed=a&justo=ipsum",
        "tags": [
            "Thriller",
            "Comedy"
        ]
    },
    {
        "id": "2f0bf1c6-a8d4-4f32-a6b1-2aee1af79819",
        "title": "Suur Tõll",
        "year": 2005,
        "cover": "http://dummyimage.com/150x117.jpg/cc0000/ffffff",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "duration": 2001,
        "contentRating": null,
        "source": "https://mapy.cz/in/quam/fringilla/rhoncus/mauris/enim/leo.jpg?sagittis=id&nam=massa&congue=id&risus=nisl&semper=venenatis&porta=lacinia&volutpat=aenean&quam=sit&pede=amet&lobortis=justo&ligula=morbi&sit=ut&amet=odio&eleifend=cras&pede=mi&libero=pede&quis=malesuada&orci=in&nullam=imperdiet&molestie=et&nibh=commodo&in=vulputate&lectus=justo&pellentesque=in&at=blandit&nulla=ultrices&suspendisse=enim&potenti=lorem&cras=ipsum&in=dolor&purus=sit&eu=amet&magna=consectetuer&vulputate=adipiscing&luctus=elit&cum=proin&sociis=interdum&natoque=mauris&penatibus=non&et=ligula&magnis=pellentesque&dis=ultrices&parturient=phasellus&montes=id&nascetur=sapien&ridiculus=in&mus=sapien&vivamus=iaculis&vestibulum=congue&sagittis=vivamus&sapien=metus&cum=arcu&sociis=adipiscing&natoque=molestie&penatibus=hendrerit&et=at&magnis=vulputate&dis=vitae&parturient=nisl&montes=aenean&nascetur=lectus&ridiculus=pellentesque&mus=eget&etiam=nunc&vel=donec&augue=quis&vestibulum=orci&rutrum=eget&rutrum=orci&neque=vehicula&aenean=condimentum&auctor=curabitur&gravida=in&sem=libero&praesent=ut&id=massa&massa=volutpat",
        "tags": [
            "Animation|Drama",
            "Comedy|Drama",
            "Thriller",
            "Drama",
            "Crime|Drama"
        ]
    },
    {
        "id": "6d7949a9-233d-4937-a09d-c1fd688a6165",
        "title": "Bridge Too Far, A",
        "year": 1999,
        "cover": "http://dummyimage.com/209x153.png/dddddd/000000",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "duration": 1914,
        "contentRating": null,
        "source": "https://economist.com/iaculis/diam/erat/fermentum/justo/nec/condimentum.json?diam=quam&neque=pede&vestibulum=lobortis&eget=ligula&vulputate=sit&ut=amet&ultrices=eleifend&vel=pede&augue=libero&vestibulum=quis&ante=orci&ipsum=nullam&primis=molestie&in=nibh&faucibus=in&orci=lectus&luctus=pellentesque&et=at&ultrices=nulla&posuere=suspendisse&cubilia=potenti&curae=cras&donec=in&pharetra=purus&magna=eu&vestibulum=magna&aliquet=vulputate&ultrices=luctus&erat=cum&tortor=sociis&sollicitudin=natoque&mi=penatibus&sit=et&amet=magnis&lobortis=dis&sapien=parturient&sapien=montes&non=nascetur&mi=ridiculus&integer=mus&ac=vivamus&neque=vestibulum&duis=sagittis&bibendum=sapien&morbi=cum&non=sociis&quam=natoque&nec=penatibus&dui=et&luctus=magnis&rutrum=dis&nulla=parturient&tellus=montes&in=nascetur&sagittis=ridiculus&dui=mus&vel=etiam&nisl=vel&duis=augue&ac=vestibulum&nibh=rutrum&fusce=rutrum&lacus=neque&purus=aenean&aliquet=auctor&at=gravida&feugiat=sem&non=praesent&pretium=id&quis=massa&lectus=id&suspendisse=nisl&potenti=venenatis&in=lacinia&eleifend=aenean&quam=sit&a=amet&odio=justo&in=morbi&hac=ut&habitasse=odio&platea=cras&dictumst=mi&maecenas=pede&ut=malesuada&massa=in&quis=imperdiet&augue=et&luctus=commodo&tincidunt=vulputate",
        "tags": [
            "Comedy"
        ]
    },
    {
        "id": "80705c74-89e8-48a4-9017-3a0ff2b7c298",
        "title": "Nobel Son",
        "year": 1994,
        "cover": "http://dummyimage.com/202x175.bmp/cc0000/ffffff",
        "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "duration": 1952,
        "contentRating": null,
        "source": "http://example.com/diam/id/ornare/imperdiet.xml?sapien=ut&arcu=dolor&sed=morbi&augue=vel&aliquam=lectus&erat=in&volutpat=quam&in=fringilla&congue=rhoncus&etiam=mauris&justo=enim&etiam=leo&pretium=rhoncus&iaculis=sed&justo=vestibulum&in=sit&hac=amet&habitasse=cursus&platea=id&dictumst=turpis&etiam=integer&faucibus=aliquet&cursus=massa&urna=id&ut=lobortis&tellus=convallis&nulla=tortor&ut=risus&erat=dapibus&id=augue&mauris=vel&vulputate=accumsan&elementum=tellus&nullam=nisi&varius=eu&nulla=orci&facilisi=mauris&cras=lacinia&non=sapien&velit=quis&nec=libero&nisi=nullam&vulputate=sit&nonummy=amet&maecenas=turpis&tincidunt=elementum&lacus=ligula&at=vehicula&velit=consequat&vivamus=morbi&vel=a&nulla=ipsum&eget=integer&eros=a&elementum=nibh&pellentesque=in&quisque=quis&porta=justo&volutpat=maecenas&erat=rhoncus&quisque=aliquam&erat=lacus&eros=morbi&viverra=quis&eget=tortor&congue=id&eget=nulla&semper=ultrices&rutrum=aliquet&nulla=maecenas&nunc=leo&purus=odio&phasellus=condimentum&in=id&felis=luctus&donec=nec&semper=molestie&sapien=sed&a=justo&libero=pellentesque&nam=viverra&dui=pede&proin=ac&leo=diam&odio=cras&porttitor=pellentesque&id=volutpat&consequat=dui&in=maecenas&consequat=tristique&ut=est&nulla=et&sed=tempus&accumsan=semper&felis=est&ut=quam&at=pharetra&dolor=magna&quis=ac",
        "tags": [
            "Drama|Thriller",
            "Drama",
            "Drama|Horror|Romance",
            "Documentary",
            "Animation"
        ]
    }
]

module.exports = {
    moviesMock
}