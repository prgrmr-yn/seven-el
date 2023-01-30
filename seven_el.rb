class SevenEl
  @@all = []
  attr_reader :fuel_price, :store, :time_interval
  def initialize(s, p, t)
    @store = s
    @fuel_price = p
    @time_interval = t
    @@all << self
  end

  def self.all
    @@all
  end
end
