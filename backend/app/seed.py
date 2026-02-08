from .database import SessionLocal
from .models import Category, Product


def slugify(s: str) -> str:
    return s.lower().replace(" ", "-").replace("'", "")


def seed_database():
    db = SessionLocal()
    try:
        if db.query(Category).first():
            return
        categories_data = [
            ("Gardening Equipment", "Tools and equipment for your garden"),
            ("Flowers", "Seeds and plants for beautiful blooms"),
            ("Pots & Planters", "Containers for indoor and outdoor planting"),
            ("Soil & Fertilizers", "Growing mediums and plant food"),
            ("Seeds & Bulbs", "Seeds and bulbs for growing"),
        ]
        categories = []
        for name, desc in categories_data:
            cat = Category(name=name, slug=slugify(name), description=desc)
            db.add(cat)
            db.commit()
            db.refresh(cat)
            categories.append(cat)

        products_data = [
            ("Premium Pruning Shears", "Ergonomic steel shears for clean cuts.", 24.99, 1, 15),
            ("Garden Trowel Set", "Stainless steel 3-piece trowel set.", 18.50, 1, 20),
            ("Watering Can 2L", "Galvanized metal watering can with rose.", 22.00, 1, 30),
            ("Garden Hose 25m", "Flexible PVC hose with spray nozzle.", 35.99, 1, 12),
            ("Rose Bush 'Queen Elizabeth'", "Pink hybrid tea rose, bare root.", 19.99, 2, 25),
            ("Lavender Plant", "Potted lavender, fragrant and drought-tolerant.", 14.99, 2, 40),
            ("Sunflower Seeds Pack", "Mixed giant and dwarf sunflower seeds.", 5.99, 2, 100),
            ("Tulip Bulbs Assorted", "Pack of 10 mixed color tulip bulbs.", 12.99, 2, 50),
            ("Terracotta Pot 25cm", "Classic terracotta pot with drainage.", 15.99, 3, 35),
            ("Ceramic Planter Set", "Set of 3 modern ceramic planters.", 42.00, 3, 18),
            ("Hanging Basket 30cm", "Wire basket with coconut liner.", 11.99, 3, 22),
            ("Window Box 60cm", "Wooden window box, treated.", 28.00, 3, 14),
            ("All-Purpose Compost 50L", "Peat-free multipurpose compost.", 12.99, 4, 60),
            ("Liquid Plant Food", "Concentrated feed for flowers and vegetables.", 8.99, 4, 45),
            ("Mulch Bark 70L", "Decorative bark mulch for borders.", 18.99, 4, 25),
            ("Tomato Seeds", "Heirloom tomato seed packet.", 4.99, 5, 80),
            ("Herb Collection Seeds", "Basil, parsley, coriander, dill.", 6.99, 5, 70),
            ("Daffodil Bulbs 20 Pack", "Yellow trumpet daffodils.", 9.99, 5, 55),
        ]
        for name, desc, price, cat_id, stock in products_data:
            product = Product(
                name=name,
                slug=slugify(name),
                description=desc,
                price=price,
                category_id=cat_id,
                in_stock=stock,
            )
            db.add(product)
        db.commit()
    finally:
        db.close()

