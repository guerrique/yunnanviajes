module ApplicationHelper
  def nav_bar
    content_tag(:ul, class: "navbar-nav mr-auto") do
      yield
    end
  end

  def nav_link(text, path, classs)
    options = current_page?(path) ? { class: "nav-item active" } : { class: "nav-item" }
    content_tag(:li,  options) do
      link_to text, path, classs
    end
  end
end
