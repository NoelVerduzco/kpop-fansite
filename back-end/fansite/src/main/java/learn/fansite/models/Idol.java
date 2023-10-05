package learn.fansite.models;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;

import java.time.LocalDate;
import java.util.Objects;

public class Idol {

    @Min(value = 0)
    private int id;
    @NotBlank(message = "Stage Name is required")
    private String stageName;

    private String position;
    @NotBlank(message = "Nationality is required")
    private String nationality;
    @PastOrPresent(message = "Birthday cannot be in the future")
    private LocalDate birthday;
    @Min(value = 57)
    @Max(value = 251)
    private int heightInCm;
    @NotBlank(message = "MBTI Type is required")
    private String mbtiType;
    @NotBlank(message = "Zodiac Sign is required")
    private String zodiacSign;
    @NotBlank(message = "Chinese Zodiac Sign is required")
    private String chineseZodiacSign;
    @NotBlank(message = "Favorite Color is required")
    private String favoriteColor;
    @Min(value = 0)
    private int groupId;

    public Idol() {

    }

    public Idol(int id, String stageName, String position, String nationality, LocalDate birthday, int heightInCm, String mbtiType, String zodiacSign, String chineseZodiacSign, String favoriteColor, int groupId) {
        this.id = id;
        this.stageName = stageName;
        this.position = position;
        this.nationality = nationality;
        this.birthday = birthday;
        this.heightInCm = heightInCm;
        this.mbtiType = mbtiType;
        this.zodiacSign = zodiacSign;
        this.chineseZodiacSign = chineseZodiacSign;
        this.favoriteColor = favoriteColor;
        this.groupId = groupId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public int getHeightInCm() {
        return heightInCm;
    }

    public void setHeightInCm(int heightInCm) {
        this.heightInCm = heightInCm;
    }

    public String getMbtiType() {
        return mbtiType;
    }

    public void setMbtiType(String mbtiType) {
        this.mbtiType = mbtiType;
    }

    public String getZodiacSign() {
        return zodiacSign;
    }

    public void setZodiacSign(String zodiacSign) {
        this.zodiacSign = zodiacSign;
    }

    public String getChineseZodiacSign() {
        return chineseZodiacSign;
    }

    public void setChineseZodiacSign(String chineseZodiacSign) {
        this.chineseZodiacSign = chineseZodiacSign;
    }

    public String getFavoriteColor() {
        return favoriteColor;
    }

    public void setFavoriteColor(String favoriteColor) {
        this.favoriteColor = favoriteColor;
    }

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Idol idol = (Idol) o;
        return id == idol.id && heightInCm == idol.heightInCm && groupId == idol.groupId && Objects.equals(stageName, idol.stageName) && Objects.equals(position, idol.position) && Objects.equals(nationality, idol.nationality) && Objects.equals(birthday, idol.birthday) && Objects.equals(mbtiType, idol.mbtiType) && Objects.equals(zodiacSign, idol.zodiacSign) && Objects.equals(chineseZodiacSign, idol.chineseZodiacSign) && Objects.equals(favoriteColor, idol.favoriteColor);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, stageName, position, nationality, birthday, heightInCm, mbtiType, zodiacSign, chineseZodiacSign, favoriteColor, groupId);
    }
}
