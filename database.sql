create table "Category"
(
    id          serial       not null
        constraint "Category_pkey"
            primary key,
    name        varchar(255) not null,
    description varchar(255) not null
);

create table "Book"
(
    id           serial       not null
        constraint "Book_pkey"
            primary key,
    title        varchar(255) not null,
    description  varchar(255) not null,
    "categoryId" integer      not null
        constraint "Book_categoryId_fkey"
            references "Category"
            on delete cascade,
    image        varchar(255)
);

create table "Opinion"
(
    id       serial       not null
        constraint "Opinion_pkey"
            primary key,
    content  varchar(255) not null,
    "bookId" integer      not null
        constraint "Opinion_bookId_fkey"
            references "Book"
            on delete cascade
);
