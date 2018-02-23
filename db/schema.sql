create table users
(
    userId serial primary key,
    username text not null unique,
    password text not null unique
)

create table listings
(
    listingId serial primary key,
    propertyName text not null unique,
    descripion text,
    address text,
    city text,
    state text,
    zip integer,
    img_url text,
    loan integer,
    morgage integer,
    rent integer
)