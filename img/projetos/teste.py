from PIL import Image, ImageDraw

def add_rounded_corners(image_path, radius):
    """Aplica bordas arredondadas à imagem."""
    img = Image.open(image_path).convert("RGBA")
    
    # Criar máscara com cantos arredondados
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), img.size], radius=radius, fill=255)
    
    # Aplicar máscara na imagem
    img.putalpha(mask)
    return img

# Caminhos das imagens de entrada
image1_path = "./img/projetos/apis.png"
image2_path = "./img/projetos/movies.png"  # Substituir pelo caminho real

# Definir raio dos cantos arredondados
corner_radius = 50  # Ajuste conforme necessário

# Processar imagens
image1_rounded = add_rounded_corners(image1_path, corner_radius)
image2_rounded = add_rounded_corners(image2_path, corner_radius)

# Salvar imagens com bordas arredondadas
image1_rounded.save("imagem1_rounded.png")
image2_rounded.save("imagem2_rounded.png")

# Exibir imagens
image1_rounded.show()
image2_rounded.show()
