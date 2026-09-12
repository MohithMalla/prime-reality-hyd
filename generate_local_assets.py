import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter

output_dir = os.path.join(os.path.dirname(__file__), "public", "images")
os.makedirs(output_dir, exist_ok=True)

# Helper function to create smooth gradient
def create_vertical_gradient(width, height, top_color, bottom_color):
    base = Image.new('RGB', (width, height), top_color)
    top_r, top_g, top_b = top_color
    bot_r, bot_g, bot_b = bottom_color
    
    draw = ImageDraw.Draw(base)
    for y in range(height):
        ratio = y / float(height)
        r = int(top_r + (bot_r - top_r) * ratio)
        g = int(top_g + (bot_g - top_g) * ratio)
        b = int(bot_b + (bot_b - top_b) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return base

def add_noise(image, factor=8):
    pixels = image.load()
    w, h = image.size
    for x in range(0, w, 2):
        for y in range(0, h, 2):
            val = random.randint(-factor, factor)
            r, g, b = pixels[x, y]
            pixels[x, y] = (
                max(0, min(255, r + val)),
                max(0, min(255, g + val)),
                max(0, min(255, b + val))
            )
    return image

# 1. HYDERABAD CITY SKYLINE & HIGHWAY INFRASTRUCTURE
def generate_hyderabad_city():
    w, h = 1600, 1000
    # Twilight / Golden-hour sky
    img = create_vertical_gradient(w, h, (25, 45, 85), (235, 140, 75))
    draw = ImageDraw.Draw(img)
    
    # Distant haze/glow
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    ov_draw.ellipse([w*0.3, h*0.35, w*0.7, h*0.8], fill=(255, 180, 100, 60))
    img = Image.alpha_composite(img.convert('RGBA'), overlay).convert('RGB')
    draw = ImageDraw.Draw(img)

    # Distant skyline silhouette
    random.seed(42)
    skyline_y = int(h * 0.48)
    for i in range(45):
        bx = int(i * (w / 40) - 20)
        bw = random.randint(25, 60)
        bh = random.randint(120, 320)
        col = (random.randint(30, 45), random.randint(45, 65), random.randint(70, 95))
        draw.rectangle([bx, skyline_y - bh, bx + bw, skyline_y + 100], fill=col)
        # Windows
        for wy in range(skyline_y - bh + 15, skyline_y, 14):
            for wx in range(bx + 5, bx + bw - 5, 8):
                if random.random() > 0.4:
                    win_col = (255, 230, 160) if random.random() > 0.3 else (180, 220, 255)
                    draw.rectangle([wx, wy, wx + 3, wy + 5], fill=win_col)

    # Midground modern tech towers (Financial District style)
    for bx, bw, bh in [(180, 130, 420), (340, 160, 490), (520, 110, 380), (820, 150, 460), (1000, 180, 520), (1220, 140, 410), (1390, 150, 360)]:
        # Gradient on building facade
        b_top = skyline_y + 80 - bh
        draw.rectangle([bx, b_top, bx + bw, skyline_y + 120], fill=(22, 36, 56))
        # Architectural glass grid & fins
        for wy in range(b_top + 10, skyline_y + 100, 12):
            for wx in range(bx + 8, bx + bw - 8, 10):
                if random.random() > 0.25:
                    c = (230, 240, 255) if (wx // 10) % 2 == 0 else (255, 215, 140)
                    draw.rectangle([wx, wy, wx + 6, wy + 7], fill=c)
        # Rooftop architectural crown
        draw.rectangle([bx + 15, b_top - 18, bx + bw - 15, b_top], fill=(45, 75, 115))

    # Elevated expressway / ORR (Outer Ring Road) curved flyover
    road_poly = [
        (0, h * 0.72),
        (w * 0.4, h * 0.65),
        (w, h * 0.78),
        (w, h),
        (0, h)
    ]
    draw.polygon(road_poly, fill=(35, 40, 48))
    # Highway markings & light trails
    for step in range(30):
        t = step / 30.0
        x = int(t * w)
        y = int(h * 0.72 + (h * 0.65 - h * 0.72) * (1 - t) + t * (h * 0.78 - h * 0.65))
        # Yellow and red light streaks
        draw.line([(x, y + 40), (x + 35, y + 42)], fill=(255, 190, 60), width=4)
        draw.line([(x, y + 60), (x + 35, y + 63)], fill=(255, 60, 50), width=4)
        draw.line([(x, y + 80), (x + 35, y + 84)], fill=(255, 255, 255), width=3)

    # Streetlights and trees along corridor
    for lx in range(40, w, 110):
        ly = int(h * 0.68 + (lx / w) * 80)
        draw.line([(lx, ly), (lx, ly - 35)], fill=(70, 75, 85), width=3)
        draw.ellipse([lx - 4, ly - 40, lx + 4, ly - 32], fill=(255, 240, 180))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "hyderabad-city.jpg"), quality=93)
    print("Generated hyderabad-city.jpg")

# 2. RESIDENTIAL PLOTS
def generate_residential_plots():
    w, h = 1400, 950
    # Clear sunny morning sky
    img = create_vertical_gradient(w, h, (140, 190, 235), (225, 240, 252))
    draw = ImageDraw.Draw(img)

    # Distant lush green tree line & gentle topography
    horizon = int(h * 0.38)
    for x in range(0, w, 40):
        r = random.randint(35, 75)
        draw.ellipse([x - r, horizon - r + 20, x + r, horizon + 30], fill=(45, 95 + random.randint(-10, 15), 45))
    
    # Ground green grass base
    draw.rectangle([0, horizon, w, h], fill=(110, 165, 70))

    # Perspective blacktop road in gated plotted layout
    road_pts = [(w * 0.46, horizon), (w * 0.54, horizon), (w * 0.85, h), (w * 0.15, h)]
    draw.polygon(road_pts, fill=(55, 58, 64))

    # Paved curb / footpath stones
    draw.polygon([(w * 0.44, horizon), (w * 0.46, horizon), (w * 0.15, h), (w * 0.08, h)], fill=(185, 180, 170))
    draw.polygon([(w * 0.54, horizon), (w * 0.56, horizon), (w * 0.92, h), (w * 0.85, h)], fill=(185, 180, 170))

    # Road center dash lines
    for step in range(12):
        t1 = step / 12.0
        t2 = (step + 0.5) / 12.0
        y1 = horizon + (h - horizon) * (t1 ** 1.6)
        y2 = horizon + (h - horizon) * (t2 ** 1.6)
        x1 = w * 0.5
        x2 = w * 0.5
        draw.line([(x1, y1), (x2, y2)], fill=(245, 245, 240), width=int(2 + step * 0.8))

    # Plotted land demarcations (neat boundary curbing stones & low decorative borders)
    # Left plot demarcations
    for p_step in [0.2, 0.45, 0.75]:
        py = horizon + int((h - horizon) * p_step)
        px_road = int(w * 0.5 - (w * 0.35) * (p_step ** 0.8))
        draw.line([(0, py), (px_road, py)], fill=(225, 220, 205), width=int(3 + p_step * 3))
        # Landscaping on plot corners
        draw.ellipse([px_road - 40, py - 30, px_road - 5, py + 5], fill=(35, 120, 50))
        draw.ellipse([px_road - 35, py - 60, px_road - 10, py - 20], fill=(50, 140, 65))

    # Right plot demarcations
    for p_step in [0.25, 0.55, 0.85]:
        py = horizon + int((h - horizon) * p_step)
        px_road = int(w * 0.5 + (w * 0.35) * (p_step ** 0.8))
        draw.line([(px_road, py), (w, py)], fill=(225, 220, 205), width=int(3 + p_step * 3))
        draw.ellipse([px_road + 5, py - 35, px_road + 45, py + 5], fill=(40, 130, 55))

    # Modern street lights along avenue
    for s_step in [0.25, 0.5, 0.8]:
        sy = horizon + int((h - horizon) * s_step)
        sx = int(w * 0.5 + (w * 0.38) * (s_step ** 0.8))
        pole_h = int(60 + s_step * 140)
        draw.line([(sx, sy), (sx, sy - pole_h)], fill=(75, 80, 90), width=int(2 + s_step * 3))
        # Lamp head
        draw.line([(sx, sy - pole_h), (sx - int(20 + s_step * 25), sy - pole_h + 5)], fill=(75, 80, 90), width=int(2 + s_step * 3))
        draw.ellipse([sx - int(25 + s_step * 25), sy - pole_h + 3, sx - int(15 + s_step * 25), sy - pole_h + 12], fill=(255, 250, 220))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "residential-plots.jpg"), quality=93)
    print("Generated residential-plots.jpg")

# 3. FARM PLOTS
def generate_farm_plots():
    w, h = 1400, 950
    # Soft morning sunlit rural atmosphere
    img = create_vertical_gradient(w, h, (155, 205, 245), (245, 240, 215))
    draw = ImageDraw.Draw(img)

    horizon = int(h * 0.42)
    
    # Distant hills / verdant ridge line
    hill_poly = [(0, horizon)]
    for x in range(0, w + 50, 80):
        hy = horizon - int(35 * math.sin(x * 0.005) + 20 * math.cos(x * 0.012) + 30)
        hill_poly.append((x, hy))
    hill_poly.extend([(w, horizon), (0, horizon)])
    draw.polygon(hill_poly, fill=(80, 135, 95))

    # Rolling green farm meadows
    draw.rectangle([0, horizon, w, h], fill=(95, 160, 65))

    # Organic tree groves (Mango, Teak, Palm orchards)
    random.seed(101)
    for _ in range(35):
        tx = random.randint(30, w - 30)
        ty = random.randint(horizon + 20, int(h * 0.78))
        scale = (ty - horizon) / float(h - horizon)
        tree_w = int(30 + scale * 90)
        tree_h = int(45 + scale * 120)
        # Trunk
        draw.rectangle([tx - int(3 * scale), ty - int(tree_h * 0.3), tx + int(3 * scale), ty], fill=(70, 50, 35))
        # Canopy clusters
        for ox, oy, rad in [(-0.2, -0.7, 0.4), (0.2, -0.65, 0.38), (0, -0.85, 0.45)]:
            cx = tx + int(ox * tree_w)
            cy = ty + int(oy * tree_h)
            cr = int(rad * tree_w)
            c_shade = (40 + random.randint(0, 20), 120 + random.randint(0, 35), 45 + random.randint(0, 15))
            draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], fill=c_shade)

    # Rustic gravel / mud access road winding through the retreat
    road_pts = [
        (w * 0.35, horizon + 30),
        (w * 0.45, h * 0.6),
        (w * 0.3, h * 0.8),
        (w * 0.1, h),
        (w * 0.28, h),
        (w * 0.48, h * 0.8),
        (w * 0.58, h * 0.6),
        (w * 0.42, horizon + 30)
    ]
    draw.polygon(road_pts, fill=(180, 160, 130))

    # Wooden post-and-rail fencing along plot front
    for fx in range(w // 4, w - 80, 50):
        fy = int(h * 0.75 + (fx / w) * 80)
        draw.line([(fx, fy), (fx, fy - 45)], fill=(110, 85, 60), width=4)
        draw.line([(fx, fy - 35), (fx + 50, fy - 33)], fill=(125, 95, 65), width=3)
        draw.line([(fx, fy - 18), (fx + 50, fy - 16)], fill=(125, 95, 65), width=3)

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "farm-plots.jpg"), quality=93)
    print("Generated farm-plots.jpg")

# 4. COMMERCIAL PROPERTY
def generate_commercial_property():
    w, h = 1400, 950
    # Clean midday urban sky
    img = create_vertical_gradient(w, h, (100, 150, 210), (220, 235, 250))
    draw = ImageDraw.Draw(img)

    ground_y = int(h * 0.76)

    # Modern Grade-A Commercial IT & Retail Hub building
    bx, by = int(w * 0.18), int(h * 0.15)
    bw, bh = int(w * 0.64), ground_y - by

    # Main structure facade (charcoal aluminum & double-glazed solar reflective glass)
    draw.rectangle([bx, by, bx + bw, ground_y], fill=(30, 42, 58))

    # Glass facade panels with blue-sky reflection
    rows, cols = 14, 18
    pad_x = bw / float(cols)
    pad_y = bh / float(rows)
    for r in range(rows):
        for c in range(cols):
            x1 = int(bx + c * pad_x + 4)
            y1 = int(by + r * pad_y + 4)
            x2 = int(bx + (c + 1) * pad_x - 4)
            y2 = int(by + (r + 1) * pad_y - 4)
            # Subtle gradient reflection
            tint = int(140 + 70 * math.sin(c * 0.4 + r * 0.2))
            draw.rectangle([x1, y1, x2, y2], fill=(tint - 30, tint, tint + 25))

    # Ground floor double-height glass retail showroom & reception atrium
    draw.rectangle([bx - 20, ground_y - 120, bx + bw + 20, ground_y], fill=(230, 235, 242))
    # Glass mullions
    for mx in range(bx - 10, bx + bw + 20, 45):
        draw.line([(mx, ground_y - 110), (mx, ground_y)], fill=(50, 60, 75), width=3)
        draw.rectangle([mx + 4, ground_y - 100, mx + 40, ground_y - 10], fill=(210, 225, 240))

    # Modern cantilevered entrance canopy
    draw.polygon([(bx + 80, ground_y - 125), (bx + 380, ground_y - 125), (bx + 420, ground_y - 85), (bx + 40, ground_y - 85)], fill=(240, 120, 30))

    # Paved corporate plaza, landscaping & parking foreground
    draw.rectangle([0, ground_y, w, h], fill=(85, 90, 98))
    # Paver pattern
    for py in range(ground_y + 15, h, 25):
        draw.line([(0, py), (w, py)], fill=(115, 120, 128), width=2)

    # Architectural planter boxes & manicured palms
    for px in [120, 280, w - 320, w - 160]:
        draw.rectangle([px - 40, ground_y - 25, px + 40, ground_y + 15], fill=(60, 65, 75))
        draw.ellipse([px - 50, ground_y - 80, px + 50, ground_y - 20], fill=(35, 115, 55))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "commercial-property.jpg"), quality=93)
    print("Generated commercial-property.jpg")

# 5. PROPERTY CONSULTATION
def generate_property_consultation():
    w, h = 1200, 800
    # Warm corporate boardroom setting
    img = create_vertical_gradient(w, h, (235, 238, 242), (210, 215, 225))
    draw = ImageDraw.Draw(img)

    # Wooden wall accent paneling on left
    draw.rectangle([0, 0, int(w * 0.35), h], fill=(120, 75, 45))
    for sl in range(15, int(w * 0.35), 25):
        draw.line([(sl, 0), (sl, h)], fill=(95, 55, 30), width=3)

    # Glass window overlooking cityscape on right
    draw.rectangle([int(w * 0.4), 40, w - 40, int(h * 0.55)], fill=(185, 210, 235))
    # Window frame
    draw.line([(int(w * 0.4), 40), (w - 40, 40)], fill=(80, 90, 105), width=6)
    draw.line([(int(w * 0.4), int(h * 0.55)), (w - 40, int(h * 0.55))], fill=(80, 90, 105), width=6)
    draw.line([(int(w * 0.68), 40), (int(w * 0.68), int(h * 0.55))], fill=(80, 90, 105), width=6)

    # Conference table (Oak / Walnut finish)
    table_y = int(h * 0.52)
    draw.polygon([(80, table_y + 80), (w - 80, table_y + 80), (w, h), (0, h)], fill=(155, 105, 65))
    draw.polygon([(80, table_y + 80), (w - 80, table_y + 80), (w - 100, table_y + 70), (100, table_y + 70)], fill=(180, 130, 85))

    # Architectural Blueprint & Master Plan sheets on table
    plan_poly = [(w * 0.28, table_y + 90), (w * 0.65, table_y + 90), (w * 0.72, h - 50), (w * 0.22, h - 50)]
    draw.polygon(plan_poly, fill=(245, 248, 255))
    draw.polygon(plan_poly, outline=(30, 80, 150), width=2)
    # Architectural layout grid lines on blueprint
    for ly in range(int(table_y + 110), h - 70, 20):
        draw.line([(w * 0.26, ly), (w * 0.68, ly)], fill=(70, 120, 190), width=1)
    for lx in range(int(w * 0.32), int(w * 0.65), 35):
        draw.line([(lx, table_y + 95), (lx, h - 60)], fill=(70, 120, 190), width=1)

    # Modern laptop & tablet on table
    # Laptop
    draw.polygon([(w * 0.75, table_y + 110), (w * 0.92, table_y + 110), (w * 0.94, table_y + 170), (w * 0.73, table_y + 170)], fill=(180, 185, 195))
    draw.polygon([(w * 0.75, table_y + 50), (w * 0.92, table_y + 50), (w * 0.92, table_y + 110), (w * 0.75, table_y + 110)], fill=(35, 40, 50))
    draw.rectangle([int(w * 0.76), table_y + 55, int(w * 0.91), table_y + 105], fill=(25, 75, 145))

    # Consultant & Client corporate silhouette silhouettes / figures in consultation
    # Consultant figure (left side)
    draw.ellipse([w * 0.18 - 45, table_y - 120, w * 0.18 + 45, table_y - 30], fill=(45, 55, 70))
    draw.polygon([(w * 0.18 - 80, table_y + 80), (w * 0.18 + 80, table_y + 80), (w * 0.18 + 60, table_y - 30), (w * 0.18 - 60, table_y - 30)], fill=(25, 65, 125))

    # Client couple figures (right side)
    draw.ellipse([w * 0.55 - 40, table_y - 110, w * 0.55 + 40, table_y - 30], fill=(50, 45, 55))
    draw.polygon([(w * 0.55 - 70, table_y + 70), (w * 0.55 + 70, table_y + 70), (w * 0.55 + 50, table_y - 30), (w * 0.55 - 50, table_y - 30)], fill=(40, 50, 65))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "property-consultation.jpg"), quality=93)
    print("Generated property-consultation.jpg")

# 6. SITE VISIT
def generate_site_visit():
    w, h = 1200, 800
    # Sunny open sky over property site
    img = create_vertical_gradient(w, h, (130, 185, 235), (230, 242, 252))
    draw = ImageDraw.Draw(img)

    horizon = int(h * 0.45)
    # Distant villa enclave / green landscape
    draw.rectangle([0, horizon, w, h], fill=(120, 175, 80))
    # Developing project villas in background
    for vx in range(100, w - 100, 220):
        draw.rectangle([vx, horizon - 50, vx + 140, horizon + 10], fill=(240, 238, 230))
        draw.polygon([(vx - 10, horizon - 50), (vx + 70, horizon - 80), (vx + 150, horizon - 50)], fill=(180, 80, 50))
        draw.rectangle([vx + 20, horizon - 40, vx + 60, horizon - 10], fill=(140, 190, 230))

    # Landscaped walkway / access road
    draw.polygon([(w * 0.35, horizon), (w * 0.5, horizon), (w * 0.7, h), (w * 0.1, h)], fill=(205, 195, 180))

    # Consultant & Clients walking on site visit with folder/clipboard
    # Consultant
    cx = int(w * 0.42)
    cy = int(h * 0.65)
    draw.ellipse([cx - 25, cy - 140, cx + 25, cy - 90], fill=(45, 45, 55))
    # Formal shirt / trousers
    draw.polygon([(cx - 35, cy), (cx + 35, cy), (cx + 25, cy - 90), (cx - 25, cy - 90)], fill=(245, 245, 250))
    draw.line([(cx - 20, cy), (cx - 15, cy + 90)], fill=(35, 45, 65), width=12)
    draw.line([(cx + 15, cy), (cx + 20, cy + 90)], fill=(35, 45, 65), width=12)
    # Clipboard/Portfolio
    draw.polygon([(cx + 25, cy - 50), (cx + 60, cy - 50), (cx + 65, cy - 15), (cx + 30, cy - 15)], fill=(20, 60, 120))

    # Client
    clx = int(w * 0.52)
    cly = int(h * 0.67)
    draw.ellipse([clx - 24, cly - 135, clx + 24, cly - 87], fill=(40, 40, 45))
    draw.polygon([(clx - 30, cly), (clx + 30, cly), (clx + 22, cly - 87), (clx - 22, cly - 87)], fill=(210, 100, 40))
    draw.line([(clx - 15, cly), (clx - 12, cly + 85)], fill=(45, 50, 55), width=12)
    draw.line([(clx + 15, cly), (clx + 18, cly + 85)], fill=(45, 50, 55), width=12)

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "site-visit.jpg"), quality=93)
    print("Generated site-visit.jpg")

# 7. PROPERTY EVALUATION
def generate_property_evaluation():
    w, h = 1200, 800
    # Clean analytical desk environment
    img = create_vertical_gradient(w, h, (245, 247, 250), (220, 226, 235))
    draw = ImageDraw.Draw(img)

    # Polished granite / glass office desk top
    desk_y = int(h * 0.35)
    draw.rectangle([0, desk_y, w, h], fill=(238, 240, 245))
    draw.line([(0, desk_y), (w, desk_y)], fill=(195, 205, 215), width=3)

    # Open property evaluation dossier & checklist binder
    bx, by = int(w * 0.22), int(desk_y + 40)
    bw, bh = int(w * 0.45), int(h * 0.5)
    draw.rectangle([bx, by, bx + bw, by + bh], fill=(255, 255, 255))
    draw.rectangle([bx, by, bx + bw, by + bh], outline=(180, 190, 205), width=2)
    # Spine
    draw.line([(bx + bw // 2, by), (bx + bw // 2, by + bh)], fill=(210, 215, 225), width=3)
    # Checkmarks and analytical evaluation data lines
    for ly in range(by + 30, by + bh - 30, 22):
        # Left page
        draw.ellipse([bx + 25, ly + 2, bx + 37, ly + 14], fill=(35, 140, 75))
        draw.line([(bx + 50, ly + 8), (bx + bw // 2 - 30, ly + 8)], fill=(80, 95, 115), width=4)
        # Right page
        draw.ellipse([bx + bw // 2 + 25, ly + 2, bx + bw // 2 + 37, ly + 14], fill=(232, 119, 34))
        draw.line([(bx + bw // 2 + 50, ly + 8), (bx + bw - 30, ly + 8)], fill=(80, 95, 115), width=4)

    # Architectural scale ruler & compass
    draw.polygon([(w * 0.12, by + 30), (w * 0.14, by + 20), (w * 0.18, by + bh), (w * 0.16, by + bh + 10)], fill=(245, 230, 120))
    # High-end calculator & stylus
    draw.rectangle([int(w * 0.72), by + 50, int(w * 0.88), by + 220], fill=(45, 52, 64))
    draw.rectangle([int(w * 0.74), by + 65, int(w * 0.86), by + 105], fill=(165, 195, 175))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "property-evaluation.jpg"), quality=93)
    print("Generated property-evaluation.jpg")

# 8. DOCUMENTATION
def generate_documentation():
    w, h = 1200, 800
    # Executive legal consultation desk
    img = create_vertical_gradient(w, h, (230, 232, 236), (195, 200, 210))
    draw = ImageDraw.Draw(img)

    # Rich Mahogany desk surface
    desk_y = int(h * 0.3)
    draw.rectangle([0, desk_y, w, h], fill=(85, 45, 25))
    # Subtle woodgrain highlights
    for wy in range(desk_y + 10, h, 18):
        draw.line([(0, wy), (w, wy)], fill=(98, 52, 30), width=2)

    # Stamp paper / legal deed documentation folders
    # Folder base
    fx, fy = int(w * 0.25), int(desk_y + 45)
    fw, fh = int(w * 0.5), int(h * 0.55)
    draw.rectangle([fx - 15, fy - 15, fx + fw + 15, fy + fh + 15], fill=(25, 67, 131)) # Prime brand royal blue binder
    # Deed papers
    draw.rectangle([fx, fy, fx + fw, fy + fh], fill=(253, 250, 242))
    # Government embossed seal / verification emblem placeholder
    draw.ellipse([fx + fw // 2 - 40, fy + 25, fx + fw // 2 + 40, fy + 105], outline=(180, 140, 50), width=3)
    draw.ellipse([fx + fw // 2 - 30, fy + 35, fx + fw // 2 + 30, fy + 95], fill=(245, 225, 170))

    # Formal clauses lines
    for ly in range(fy + 130, fy + fh - 90, 18):
        draw.line([(fx + 40, ly), (fx + fw - 40, ly)], fill=(90, 85, 80), width=3)

    # Signature line & gold seal
    draw.line([(fx + 60, fy + fh - 40), (fx + 220, fy + fh - 40)], fill=(40, 40, 40), width=2)
    draw.ellipse([fx + fw - 110, fy + fh - 70, fx + fw - 40, fy + fh], fill=(232, 119, 34)) # Orange wax seal

    # Fountain pen
    draw.polygon([(w * 0.78, fy + 80), (w * 0.81, fy + 65), (w * 0.88, fy + 280), (w * 0.85, fy + 295)], fill=(20, 20, 25))
    # Gold nib
    draw.polygon([(w * 0.78, fy + 80), (w * 0.81, fy + 65), (w * 0.77, fy + 50)], fill=(215, 175, 65))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "documentation.jpg"), quality=93)
    print("Generated documentation.jpg")

# 9. OFFICE / CONTACT BUILDING
def generate_office():
    w, h = 1200, 800
    # Contemporary corporate real estate headquarters lobby
    img = create_vertical_gradient(w, h, (240, 242, 246), (215, 220, 230))
    draw = ImageDraw.Draw(img)

    # Floor (Italian Travertine marble with reflections)
    floor_y = int(h * 0.48)
    draw.rectangle([0, floor_y, w, h], fill=(232, 228, 220))
    # Marble grid tiles
    for fy in range(floor_y + 20, h, 40):
        draw.line([(0, fy), (w, fy)], fill=(215, 210, 200), width=2)

    # Back architectural feature wall with vertical timber acoustic slats
    draw.rectangle([int(w * 0.15), 0, int(w * 0.85), floor_y], fill=(45, 52, 65))
    for sl in range(int(w * 0.18), int(w * 0.82), 16):
        draw.line([(sl, 0), (sl, floor_y)], fill=(160, 110, 70), width=8)

    # Reception / Client consultation reception counter
    rx, ry = int(w * 0.28), int(floor_y - 20)
    rw, rh = int(w * 0.44), int(h * 0.32)
    # Marble monolithic desk
    draw.polygon([(rx, ry + rh), (rx + rw, ry + rh), (rx + rw - 30, ry), (rx + 30, ry)], fill=(245, 245, 248))
    draw.polygon([(rx, ry + rh), (rx + rw, ry + rh), (rx + rw, ry + rh + 15), (rx, ry + rh + 15)], fill=(210, 210, 215))
    # Under-counter warm LED cove lighting
    draw.line([(rx + 30, ry + rh - 4), (rx + rw - 30, ry + rh - 4)], fill=(255, 180, 80), width=5)

    # Architectural indoor planter with Ficus & Strelitzia
    draw.rectangle([w - 220, floor_y - 40, w - 80, floor_y + 60], fill=(60, 65, 75))
    draw.ellipse([w - 250, floor_y - 220, w - 50, floor_y - 20], fill=(40, 115, 60))

    # Modern minimalist pendant lights
    for lx in [w * 0.35, w * 0.5, w * 0.65]:
        draw.line([(lx, 0), (lx, ry - 70)], fill=(50, 50, 55), width=2)
        draw.ellipse([lx - 16, ry - 70, lx + 16, ry - 40], fill=(240, 120, 30))

    img = img.filter(ImageFilter.GaussianBlur(0.3))
    img.save(os.path.join(output_dir, "office.jpg"), quality=93)
    print("Generated office.jpg")

if __name__ == "__main__":
    generate_hyderabad_city()
    generate_residential_plots()
    generate_farm_plots()
    generate_commercial_property()
    generate_property_consultation()
    generate_site_visit()
    generate_property_evaluation()
    generate_documentation()
    generate_office()
    print("All 9 photographic assets generated successfully!")
